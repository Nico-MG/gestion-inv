import React from "react";
import Switch from "../Switch";
import "../rowbuttons.css";

const DeleteButton = (props) => {
  const { currentTable, id, fetchData } = props;
  const deleteTableRow = Switch.apiDelete(currentTable);

  return (
    <button
      className="boton boton-eliminar"
      onClick={() => deleteTableRow(id).then(() => fetchData())}
    ></button>
  );
};

export default DeleteButton;