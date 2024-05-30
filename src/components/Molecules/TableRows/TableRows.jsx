import React, { useState } from "react";
import TableBody from "@mui/material/TableBody";
import { StyledTableCell, StyledTableRow } from "../StylesTable";
import EditButton from "../TableButtons/EditButton";
import DeleteButton from "../TableButtons/DeleteButton";

const TableRows = ({
  currentTable,
  data,
  columns,
  columnId,
  fetchData,
  toggleForm,
  setFormProps,
}) => {
  return (
    <TableBody>
      {data.map((item, index) => (
        <StyledTableRow
          key={index}
        >
          {columns.map((column) => (
            <StyledTableCell key={column}>
              {Array.isArray(item[column]) ? "" : item[column]}
            </StyledTableCell>
          ))}
          <StyledTableCell key="actions">
            <div className="boton-contenedor">
              <EditButton
                id={item[columnId]}
                data={data}
                columnId={columnId}
                fetchData={fetchData}
                toggleForm={toggleForm}
                setFormProps={setFormProps}
              />
              <DeleteButton
                currentTable={currentTable}
                id={item[columnId]}
                fetchData={fetchData}
              />
            </div>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default TableRows;
