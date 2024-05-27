import React, { useState } from "react";
import "./rowbuttons.css";

const EditButton = ({
  id,
  data,
  columnId,
  fetchData,
  toggleForm,
  setFormProps,
}) => {
  const [initialEditData, setInitialEditData] = useState(data.find((item) => item[columnId] === id));

  return (
    <>
      <button
        className="boton boton-modificar"
        onClick={() => {
          setFormProps({
            mode: "modify",
            fetchData: fetchData,
            initialData: initialEditData,
            setInitialData: setInitialEditData,
          });
          toggleForm();
        }}
      ></button>
    </>
  );
};

export default EditButton;
