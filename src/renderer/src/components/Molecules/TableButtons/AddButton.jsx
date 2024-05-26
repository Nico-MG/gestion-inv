import React, { useState } from "react";
import "./addbutton.css";
import Switch from "./Switch";

const AddButton = (props) => {
  const [active, setActive] = useState(false);
  const { currentTable, fetchData } = props;

  const toggleFormVisibility = () => {
    setActive(!active);
  };

  return (
    <>
      <div
        id="boton-flotante"
        className="material-symbols-outlined"
        onClick={toggleFormVisibility}
      >
        +
      </div>
      {active &&
        Switch.renderForm(currentTable, {
          mode: "create",
          closeForm: toggleFormVisibility,
          fetchData: fetchData,
        })}
    </>
  );
};

export default AddButton;
