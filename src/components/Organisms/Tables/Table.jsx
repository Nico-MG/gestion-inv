import React, { useState, useEffect } from "react";
import "./table.css";
import TableHeader from "../../Molecules/TableHeader/TableHeader";
import TableRows from "../../Molecules/TableRows/TableRows";

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
    <>
      <div className="tabla-datos">
        <table>
          <thead>
            <TableHeader columns={columns} />
          </thead>
          <tbody>
            <TableRows
              currentTable={currentTable}
              data={data}
              columns={columns}
              columnId={columnId}
              fetchData={fetchData}
              toggleForm={toggleForm}
              setFormProps={setFormProps}
            />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
