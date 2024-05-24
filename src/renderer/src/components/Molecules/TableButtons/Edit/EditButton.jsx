import React, { useState } from "react";
import Switch from "../Switch";
import "../rowbuttons.css";

const EditButton = (props) => {
  const [active, setActive] = useState(false);
  const [initialEditData, setInitialEditData] = useState(null);
  const [initialDetailEditData, setInitialDetailEditData] = useState(null);

  const {
    currentTable,
    id,
    data,
    detailData,
    columnId,
    detailColumnId,
    fetchData,
  } = props;

  const toggleFormVisibility = () => {
    setActive(!active);
  };

  const prepareModifyData = (id) => {
    const toEditData = data.find((item) => item[columnId] === id);
    setInitialEditData(toEditData);
    if (detailData) {
      const toEditDetailData = detailData.filter(
        (item) => item[detailColumnId] == id
      );
      console.log(toEditDetailData);
      setInitialDetailEditData(toEditDetailData);
    }
  };

  return (
    <>
      <button
        className="boton boton-modificar"
        onClick={() => {
          prepareModifyData(id);
          toggleFormVisibility();
        }}
      ></button>
      {active &&
        Switch.renderForm(currentTable, {
          mode: "modify",
          closeForm: toggleFormVisibility,
          fetchData: fetchData,
          initialData: initialEditData,
          initialDetailData: initialDetailEditData,
          setInitialData: setInitialEditData,
          setInitialDetailData: setInitialDetailEditData,
        })}
    </>
  );
};

export default EditButton;
