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

const DeleteButton = (id, handleDelete) => {
  return (
    <button
      className="boton boton-eliminar"
      onClick={() => handleDelete(id)}
    ></button>
  );
};

const ModifyButton = ({ handleFormAction, handleModify, handleShowForm }) => {
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

const AddButton = ({ handleShowForm, handleFormAction }) => {
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

const RenderForm = (formProps) => {
  switch (currentTable) {
    case "productos":
      return <ProductForm {...formProps} />;
    case "pedidos":
      return <OrderForm {...formProps} />;
    default:
      return null;
  }
};

const Tuples = ({
  data,
  columns,
  primaryKey,
  handleFormAction,
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
          <div className="boton-contenedor">
            <ModifyButton
              handleModify={handleModify}
              handleFormAction={handleFormAction}
              handleShowForm={handleShowForm}
            />
            <DeleteButton id={item[primaryKey]} handleDelete={handleDelete} />
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
              <Tuples
                data={data}
                columns={columns}
                primaryKey={primaryKey}
                handleFormAction={handleFormAction}
                handleModify={handleModify}
                handleShowForm={handleShowForm}
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
        RenderForm({
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

export default Table;
