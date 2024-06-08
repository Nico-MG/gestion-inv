import React, { useState, useEffect } from "react";
import { IconButton, Tooltip } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import { StyledTableCell, StyledTableRow } from "../../styles/StylesTable";
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
  const dIndexKey = isDetailTable(currentTable)
    ? Object.keys(data[0]).length - 1
    : null;

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
                <IconButton
                  onClick={() => handleDetails(obj[columns[dIndexKey]])}
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: 1,
                    color: "secondary.contrastText",
                    "&:hover": {
                      backgroundColor: "#C3FA7B",
                    },
                  }}
                >
                  <Tooltip title="Ver detalles" placement="bottom" arrow enterDelay={500} >
                    <VisibilityIcon />
                  </Tooltip>
                </IconButton>
              )}
              <IconButton
                onClick={() => handleEdit(obj)}
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: 1,
                  color: "secondary.contrastText",
                  "&:hover": {
                    backgroundColor: "#C3FA7B",
                  },
                }}
              >
                <Tooltip title="Editar" placement="bottom" arrow enterDelay={500} >
                  <EditIcon />
                </Tooltip>
              </IconButton>
              <IconButton
                onClick={() => handleDelete(obj[columns[0]])}
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: 1,
                  color: "secondary.contrastText",
                  "&:hover": {
                    backgroundColor: "#C3FA7B",
                  },
                }}
              >
                <Tooltip title="Borrar" placement="bottom" arrow enterDelay={500} >
                  <DeleteIcon />
                </Tooltip>
              </IconButton>
            </div>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default TableRows;
