import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../functions/helpers";
import "./table.css";
import ProductForm from "./ProductForm";
import OrderForm from "./OrderForm";

const IndexTable = ({ data }) => {
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

const DeleteButton = (id, handleDelete) => {
  return (
    <button
      className="boton boton-eliminar"
      onClick={() => handleDelete(id)}
    ></button>
  );
};

const ModifyButton = ({
  id,
  handleModify,
  handleFormAction,
  handleShowForm,
}) => {
  return (
    <button
      className="boton boton-modificar"
      onClick={() => {
        handleFormAction("modify");
        handleModify(id);
        handleShowForm();
      }}
    ></button>
  );
};

const AddButton = ({ handleFormAction, handleShowForm }) => {
  return (
    <div
      id="boton-flotante"
      className="material-symbols-outlined"
      onClick={() => {
        handleFormAction("create");
        handleShowForm();
      }}
    >
      +
    </div>
  );
};

const Tuples = ({
  data,
  columns,
  columnId,
  handleShowForm,
  handleFormAction,
  handleModify,
  handleDelete,
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
              handleModify={handleModify}
              handleFormAction={handleFormAction}
              handleShowForm={handleShowForm}
            />
            <DeleteButton id={item[columnId]} handleDelete={handleDelete} />
          </div>
        )}
      </td>
    </tr>
  ));
};

const Table = ({
  currentTable,
  data,
  deleteTuple,
  createTuple,
  updateTuple,
  fetchData,
}) => {
  const [modifyTuple, setModifyTuple] = useState(null);
  const [formAction, setFormAction] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const { columns, columnId } = IndexTable({ data });

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleModifyTuple = (arg) => {
    setModifyTuple(arg);
  }

  const handleModify = (id) => {
    const modifyTuple = data.find((item) => item[columnId] === id);
    setModifyTuple(modifyTuple);
  };

  const handleFormAction = (arg) => {
    setFormAction(arg);
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
              <Tuples
                data={data}
                columns={columns}
                columnId={columnId}
                handleShowForm={handleShowForm}
                handleFormAction={handleFormAction}
                handleModify={handleModify}
                handleDelete={deleteTuple}
              />
            )}
          </tbody>
        </table>
      </div>
      <AddButton
        handleFormAction={handleFormAction}
        handleShowForm={handleShowForm}
      />
      {showForm &&
        renderForm({
          mode: formAction,
          initialData: modifyTuple,
          setInitialData: handleModifyTuple,
          closeForm: handleShowForm,
          fetchData: fetchData,
          createTuple: createTuple,
          updateTuple: updateTuple,
        })}
    </>
  );
};

export default Table;
