import React, { useState, useEffect } from "react";
import "./table.css";
import EditButton from "../../Molecules/TableButtons/Edit/EditButton";
import DeleteButton from "../../Molecules/TableButtons/Delete/DeleteButton";

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

const TableRows = (props) => {
  const { currentTable, data, columns, columnId, fetchData } = props;
  
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredRow(id);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  return data.map((item, index) => (
    <tr
      key={index}
      onMouseEnter={() => handleMouseEnter(item[columnId])}
      onMouseLeave={handleMouseLeave}
    >
      {columns.map((column) => (
        <td key={column}>{item[column]}</td>
      ))}
      <td className="boton-celda">
        {hoveredRow === item[columnId] && (
          <div className="boton-contenedor">
            <EditButton
              currentTable={currentTable}
              id={item[columnId]}
              data={data}
              columnId={columnId}
              fetchData={fetchData}
            />
            <DeleteButton
              currentTable={currentTable}
              id={item[columnId]}
              fetchData={fetchData}
            />
          </div>
        )}
      </td>
    </tr>
  ));
};

const Table = (props) => {
  const { data, fetchData, currentTable } = props;
  
  const { columns, columnId } = useTableColumns({ data });

  return (
    <>
      <div className="tabla-datos">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data && (
              <TableRows
                currentTable={currentTable}
                data={data}
                columns={columns}
                columnId={columnId}
                fetchData={fetchData}
              />
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
