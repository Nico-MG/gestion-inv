import React, { useState, useEffect } from "react";
import TableMUI from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHeader from "../Molecules/TableHeader";
import TableRows from "../Molecules/TableRows";
import { Grid } from "@mui/material";

const useTableColumns = ({ data }) => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setColumns(Object.keys(data[0]));
    }
  }, [data]);

  return columns;
};

const Table = ({ data, fetchData, currentTable, toggleForm, setFormProps }) => {
  const columns = useTableColumns({ data });

  return (
    <Grid item xs={10} md={9}>
    <TableContainer
      // sx={{ height: "50%" }}
      component={Paper}
    >
      <TableMUI
        className="tabla-datos"
        // sx={{ minWidth: 800 }}
        aria-label="customized table"
        // stickyHeader
      >
        <TableHeader 
          currentTable={currentTable}
        />
        <TableRows
          currentTable={currentTable}
          data={data}
          columns={columns}
          fetchData={fetchData}
          toggleForm={toggleForm}
          setFormProps={setFormProps}
        />
      </TableMUI>
    </TableContainer>
    </Grid>
  );
};

export default Table;
