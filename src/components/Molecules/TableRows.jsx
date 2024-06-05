import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import TableBody from "@mui/material/TableBody";
import { StyledTableCell, StyledTableRow } from "./StylesTable";
import { sendNotification } from "@tauri-apps/api/notification";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DetailButton from "./TableButtons/DetailButton";
import { auxDelete } from "../../functions/auxDelete";

const isDetailTable = ({ currentTable }) => {
  return (
    currentTable === "sales" ||
    currentTable === "refunds" ||
    currentTable === "orders"
  );
};

const TableRows = ({
  currentTable,
  data,
  columns,
  fetchData,
  toggleForm,
  setFormProps,
}) => {
  let detailField = null;

  const handleEdit = (obj) => {
    setFormProps({
      mode: "modify",
      fetchData: fetchData,
      initialData: obj,
    });
    toggleForm();
  };

  const handleDelete = async (id) => {
    try {
      await auxDelete({ currentTable, id });
      await fetchData();

      sendNotification(`Eliminado producto con ID: ${id}`);
    } catch (error) {
      sendNotification(
        `Error al eliminar producto: Problemas de conexión al servidor`
      );
    }
  };

  return (
    <TableBody>
      {data.map((obj, index) => (
        <StyledTableRow key={index}>
          {columns.map((column) =>
            !Array.isArray(obj[column]) ? (
              <StyledTableCell key={obj[column]}>{obj[column]}</StyledTableCell>
            ) : (
              ((detailField = column), null)
            )
          )}
          <StyledTableCell key="actions">
            <div>
              {isDetailTable({ currentTable }) && detailField && (
                <DetailButton data={obj[detailField]} />
              )}
              <IconButton
                onClick={() => handleEdit(obj)}
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: "#C3FA7B",
                  },
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => handleDelete(obj[columns[0]])}
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: "#C3FA7B",
                  },
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default TableRows;
