import React, { useState } from "react";
import EditButton from "../TableButtons/EditButton";
import DeleteButton from "../TableButtons/DeleteButton";

const TableRows = ({
  currentTable,
  data,
  columns,
  columnId,
  fetchData,
  toggleForm,
  setFormProps,
}) => {
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
        )}
      </td>
    </tr>
  ));
};

export default TableRows;
