import React from "react";
import TableBody from "@mui/material/TableBody";
import { StyledTableCell, StyledTableRow } from "./StylesTable";
import EditButton from "./TableButtons/EditButton";
import DeleteButton from "./TableButtons/DeleteButton";
import DetailButton from "./TableButtons/DetailButton";

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
  columnId,
  fetchData,
  toggleForm,
  setFormProps,
}) => {
  let detailField = null;

  return (
    <TableBody>
      {data.map((item, index) => (
        <StyledTableRow key={index}>
          {columns.map((column) =>
            !Array.isArray(item[column]) ? (
              <StyledTableCell key={column}>{item[column]}</StyledTableCell>
            ) : (
              ((detailField = column),
              null)
            )
          )}
          <StyledTableCell key="actions">
            <div>
              {(isDetailTable({ currentTable }) && detailField) &&
                <DetailButton 
                  data={item[detailField]}
                />
              }
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
