import React, { useState } from "react";
import "./orderform.css";

const FormPedido = ({
  createTableRow,
  updateTableRow,
  mode,
  closeForm,
  initialData,
  fetchData,
}) => {
  const initialRow = {
    id_producto: "",
    cantidad: "",
  };

  const [formRows, setFormRows] = useState([initialRow]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newRows = [...formRows];
    newRows[index][name] = value;
    setFormRows(newRows);
  };

  const handleAddRow = () => {
    setFormRows([...formRows, initialRow]);
  };

  const handleRemoveRow = (index) => {
    if (formRows.length > 1) {
      const newRows = [...formRows];
      newRows.splice(index, 1);
      setFormRows(newRows);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Handle form submission for each row here
    console.log("Form Rows:", formRows);

    closeForm();
  };

  return (
    <form style={{ zIndex: 1 }} id="ventana_flotante" onSubmit={handleSubmit}>
      <div className="titulo">
        {mode === "modificar" ? "Modificar Pedido" : "Registro de Pedido"}
      </div>
      <div className="contenido">
        <div className="fila centrado">
          <div className="etiqueta">ID del Pedido:</div>
          <input type="text" className="input" value="" />
        </div>
        <div className="fila centrado">
          <div className="etiqueta">RUT del Cliente:</div>
          <input type="text" className="input" value="" />
        </div>
        
          <div className="fila">
            <div className="columna id_producto">ID de producto</div>
            <div className="columna cantidad">Cantidad</div>
            <div className="columna total">Total</div>
          </div>


        <div className="contenido-ventas">

          <div className="fila">
            <input className="columna input_producto" type="text"/>
            <input className="columna input_cantidad" type="number"/>
            <h1 className="unidad">x 1.000</h1>
            <h1>3.000</h1>
          </div>
        </div>
          

        


      </div>




      <div className="boton-opciones">
        <button className="cerrar-btn" onClick={closeForm}>
          Cerrar
        </button>
        <button className="guardar-btn" type="submit">
          {mode === "modify" ? "Modificar" : "Guardar"}
        </button>
      </div>
    </form>
  );
};

export default FormPedido;
