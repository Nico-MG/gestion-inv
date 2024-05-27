import React from "react";

const TableHeader = ({ columns }) => {
  return (
    <tr>
      {columns.map((column) => (
        <th key={column}>{column}</th>
      ))}
    </tr>
  );
};

export default TableHeader;