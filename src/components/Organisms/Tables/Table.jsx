import React, { useState, useEffect } from "react";
import TableMUI from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHeader from "../../Molecules/TableHeader";
import TableRows from "../../Molecules/TableRows";

const useTableColumns = ({ data }) => {
  const [columns, setColumns] = useState([]);
  const [columnId, setColumnId] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const keys = Object.keys(data[0]);
      setColumns(keys);
      setColumnId(Object.keys(data[0])[0]);
    }
  }, [data]);

  return { columns, columnId };
};

const Table = ({ data, fetchData, currentTable, toggleForm, setFormProps }) => {
  const { columns, columnId } = useTableColumns({ data });

  return (
    <TableContainer
      sx={{ width: "1130px", left: "23%", top: "20px", position: "absolute" }}
      component={Paper}
    >
      <TableMUI
        className="tabla-datos"
        sx={{ minWidth: 800 }}
        aria-label="customized table"
      >
        <TableHeader currentTable={currentTable} />
        <TableRows
          currentTable={currentTable}
          data={data}
          columns={columns}
          columnId={columnId}
          fetchData={fetchData}
          toggleForm={toggleForm}
          setFormProps={setFormProps}
        />
      </TableMUI>
    </TableContainer>
  );
};

export default Table;
