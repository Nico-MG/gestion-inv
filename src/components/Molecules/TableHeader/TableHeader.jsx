import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StyledTableCell } from "../StylesTable";

const tableColumns = ({ currentTable }) => {
  switch (currentTable) {
    case "products":
      return ["ID", "Nombre", "Categoria", "Cantidad", "Cantidad Mínima", "Precio"];
    case "orders":
      return ["ID", "RUT del Proveedor", "RUT del Usuario", "Fecha", "Total de Compra", "Detalles"];
    case "sales":
      return ["ID", "RUT del Cliente", "RUT del Usuario", "Fecha", "Total de Venta", "Detalles"];
    default:
      return console.error("El tipo de tabla no coincide con ninguno especificado");
  }
}


const TableHeader = ({ currentTable }) => {
  const columns = tableColumns({ currentTable });

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <StyledTableCell key={column}>{column}</StyledTableCell>
        ))}
        <StyledTableCell>Opciones</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
