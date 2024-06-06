import React, { useState, useEffect } from "react";
import TableBody from "@mui/material/TableBody";
import { StyledTableCell, StyledTableRow, StyledTableIcon } from "../../styles/StylesTable";
import { sendNotification } from "@tauri-apps/api/notification";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { auxDelete } from "../../functions/auxDelete";

const isDetailTable = (currentTable) => {
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
  // index key which would contain the array of details if it exists
  const dIndexKey = isDetailTable(currentTable) ? columns.length - 1 : null;

  const handleDetails = (details) => {
    console.log(details);
    // TODO: render the modal and pass to it the details data to be shown
  };

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
          {columns.map(
            (column) =>
              !Array.isArray(obj[column]) && (
                <StyledTableCell key={obj[column]}>
                  {obj[column]}
                </StyledTableCell>
              )
          )}
          <StyledTableCell key="actions">
            <div>
              {dIndexKey && (
                <StyledTableIcon
                  onClick={() => handleDetails(obj[columns[dIndexKey]])}
                >
                  <VisibilityIcon />
                </StyledTableIcon>
              )}
              <StyledTableIcon
                onClick={() => handleEdit(obj)}
              >
                <EditIcon />
              </StyledTableIcon>
              <StyledTableIcon
                onClick={() => handleDelete(obj[columns[0]])}
              >
                <DeleteIcon />
              </StyledTableIcon>
            </div>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default TableRows;
