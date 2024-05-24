import React from "react";

const TableHeader = (props) => {
  const { columns } = props;

  return (
    <tr>
      {columns.map((column) => (
        <th key={column}>{column}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
