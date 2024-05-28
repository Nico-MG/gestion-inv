import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StyledTableCell } from "../StylesTable";

const TableHeader = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <StyledTableCell key={column}>{column}</StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
