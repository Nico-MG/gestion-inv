import React from "react";
import "./addbutton.css";

const AddButton = ({ fetchData, toggleForm, setFormProps }) => {
  return (
    <div
      id="boton-flotante"
      className="material-symbols-outlined"
      onClick={() => {
        setFormProps({
          mode: "create",
          fetchData: fetchData,
        });
        toggleForm();
      }}
    >
      +
    </div>
  );
};

export default AddButton;
