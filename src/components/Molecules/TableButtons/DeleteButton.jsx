import React from "react";
import AuxDelete from "./AuxDelete";
import "./rowbuttons.css";

const DeleteButton = (props) => {
  const { currentTable, id, fetchData } = props;
  const deleteTableRow = AuxDelete({ currentTable });

  return (
    <button
      className="boton boton-eliminar"
      onClick={() => deleteTableRow(id).then(() => fetchData())}
    ></button>
  );
};

export default DeleteButton;