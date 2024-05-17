import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../functions/helpers";
import "./table.css";
import ProductForm from "./ProductForm";
import OrderForm from "./OrderForm";

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

const DeleteButton = ({ id, deleteTableRow, fetchData }) => {
  return (
    <button
      className="boton boton-eliminar"
      onClick={() => deleteTableRow(id).then(() => fetchData())}
    ></button>
  );
};

const ModifyButton = ({
  id,
  prepareModifyData,
  selectFormAction,
  toggleFormVisibility,
}) => {
  return (
    <button
      className="boton boton-modificar"
      onClick={() => {
        selectFormAction("modify");
        prepareModifyData(id);
        toggleFormVisibility();
      }}
    ></button>
  );
};

const AddButton = ({ selectFormAction, toggleFormVisibility }) => {
  return (
    <div
      id="boton-flotante"
      className="material-symbols-outlined"
      onClick={() => {
        selectFormAction("create");
        toggleFormVisibility();
      }}
    >
      +
    </div>
  );
};

const TableRows = ({
  data,
  columns,
  columnId,
  toggleFormVisibility,
  selectFormAction,
  prepareModifyData,
  deleteTableRow,
  fetchData,
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
            <ModifyButton
              id={item[columnId]}
              prepareModifyData={prepareModifyData}
              selectFormAction={selectFormAction}
              toggleFormVisibility={toggleFormVisibility}
            />
            <DeleteButton
              id={item[columnId]}
              deleteTableRow={deleteTableRow}
              fetchData={fetchData}
            />
          </div>
        )}
      </td>
    </tr>
  ));
};

const Table = ({
  currentTable,
  data,
  fetchData,
  createTableRow,
  updateTableRow,
  deleteTableRow,
}) => {
  const [initialModifyData, setInitialModifyData] = useState(null);
  const [formAction, setFormAction] = useState(null);
  const [showFormState, setShowFormState] = useState(false);

  const { columns, columnId } = useTableColumns({ data });

  const toggleFormVisibility = () => {
    setShowFormState(!showFormState);
  };

  const prepareModifyData = (id) => {
    const toModifyData = data.find((item) => item[columnId] === id);
    setInitialModifyData(toModifyData);
  };

  const selectFormAction = (action) => {
    setFormAction(action);
  };

  const renderForm = (formProps) => {
    switch (currentTable) {
      case "productos":
        return <ProductForm {...formProps} />;
      case "pedidos":
        return <OrderForm {...formProps} />;
      default:
        return null;
    }
  };

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
                data={data}
                columns={columns}
                columnId={columnId}
                toggleFormVisibility={toggleFormVisibility}
                selectFormAction={selectFormAction}
                prepareModifyData={prepareModifyData}
                deleteTableRow={deleteTableRow}
                fetchData={fetchData}
              />
            )}
          </tbody>
        </table>
      </div>
      <AddButton
        selectFormAction={selectFormAction}
        toggleFormVisibility={toggleFormVisibility}
      />
      {showFormState &&
        renderForm({
          mode: formAction,
          initialData: initialModifyData,
          setInitialData: setInitialModifyData,
          closeForm: toggleFormVisibility,
          fetchData: fetchData,
          createTableRow: createTableRow,
          updateTableRow: updateTableRow,
        })}
    </>
  );
};

export default Table;
