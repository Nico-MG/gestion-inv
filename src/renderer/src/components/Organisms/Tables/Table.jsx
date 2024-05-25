import React, { useState, useEffect } from "react";
import "./table.css";
import AddButton from "../../Molecules/TableButtons/Add/AddButton";
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

const useTableDetailColumns = ({ detailData }) => {
  const [detailColumns, setDetailColumns] = useState([]);
  const [detailColumnId, setDetailColumnId] = useState(null);

  useEffect(() => {
    if (detailData && detailData.length > 0) {
      const keys = Object.keys(detailData[0]);
      setDetailColumns(keys);
      setDetailColumnId(Object.keys(detailData[0])[0]);
      console.log(detailData);
    }
  }, [detailData]);

  return { detailColumns, detailColumnId };
};

const TableRows = (props) => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const {
    currentTable,
    data,
    detailData,
    columns,
    columnId,
    detailColumnId,
    fetchData,
  } = props;

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
              detailData={detailData}
              columnId={columnId}
              detailColumnId={detailColumnId}
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
  const { data, detailData, fetchData, currentTable } = props;

  const { columns, columnId } = useTableColumns({ data });
  const { detailColumns, detailColumnId } = useTableDetailColumns({
    detailData,
  });

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
                detailData={detailData}
                columns={columns}
                columnId={columnId}
                detailColumnId={detailColumnId}
                fetchData={fetchData}
              />
            )}
          </tbody>
        </table>
      </div>
      <AddButton currentTable={currentTable} fetchData={fetchData} />
    </>
  );
};

export default Table;
