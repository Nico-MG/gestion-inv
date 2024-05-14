import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../functions/helpers";
import "./extendedtable.css";
import ProductForm from "./ProductForm";
import OrderForm from "./OrderForm";

const IndexTable = ({ data }) => {
  const [primaryKey, setPrimaryKey] = useState(null);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const keys = Object.keys(data[0]);
      setPrimaryKey(Object.keys(data[0])[0]);
      setColumns(keys);
    }
  }, [data]);

  return { columns, primaryKey };
};

const LoadedTuples = ({
  data,
  columns,
  primaryKey,
  handleAction,
  handleModify,
  handleShowForm,
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
      onMouseEnter={() => handleMouseEnter(item[primaryKey])}
      onMouseLeave={handleMouseLeave}
    >
      {columns.map((column) => (
        <td key={column}>{capitalizeFirstLetter(item[column])}</td>
      ))}
      <td className="boton-celda">
        {hoveredRow === item[primaryKey] && (
          <TupleButtons
            handleAction={handleAction}
            handleModify={handleModify}
            handleShowForm={handleShowForm}
            handleDelete={handleDelete}
            id={item[primaryKey]}
          />
        )}
      </td>
    </tr>
  ));
};

const TupleButtons = ({
  handleAction,
  handleModify,
  handleShowForm,
  handleDelete,
  id,
}) => {
  return (
    <div className="boton-contenedor">
      <button
        className="boton boton-modificar"
        onClick={() => {
          handleAction("modify");
          handleModify(id);
          handleShowForm();
        }}
      ></button>
      <button
        className="boton boton-eliminar"
        onClick={() => handleDelete(id)}
      ></button>
    </div>
  );
};

const ExtendedTable = ({
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

  const { columns, primaryKey } = IndexTable({ data });

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleModify = (id) => {
    const modifyTuple = data.find((item) => item[primaryKey] === id);
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
                <th key={column}>{capitalizeFirstLetter(column)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data && (
              <LoadedTuples
                data={data}
                columns={columns}
                primaryKey={primaryKey}
                handleAction={handleFormAction}
                handleModify={handleModify}
                handleShowForm={handleShowForm}
                handleDelete={deleteTuple}
              />
            )}
          </tbody>
        </table>
      </div>
      <div
        id="boton-flotante"
        className="material-symbols-outlined"
        onClick={() => {
          setFormAction("create");
          handleShowForm();
        }}
      >
        +
      </div>
      {showForm &&
        renderForm({
          mode: formAction,
          closeForm: handleShowForm,
          initialData: modifyTuple,
          createTuple: createTuple,
          updateTuple: updateTuple,
          fetchData: fetchData,
        })}
    </>
  );
};

export default ExtendedTable;
