import React, { useState } from "react";
import "./orderform.css";

const OrderForm = ({
  createTableRow,
  updateTableRow,
  mode,
  closeForm,
  initialData,
  initialDetailData,
  fetchData,
}) => {
  const initialRow = {
    id_pedido: "",
    id_producto: "",
    cantidad: "",
    precio_total: "",
  };

  const [priceUnit, setPriceUnit] = useState([0])
  const [formRows, setFormRows] = useState([initialRow]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newRows = [...formRows];
    newRows[index][name] = value;
    setFormRows(newRows);
  };

  const handleAddRow = () => {
    setFormRows([...formRows, { ...initialRow }]);
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
          <div className="etiqueta">ID del pedido:</div>
          <input type="text" className="input" name="id_pedido" value="" />
        </div>

        <div className="fila centrado">
          <div className="etiqueta">RUT de la Empresa:</div>
          <input type="text" className="input" name="rut_proveedor" value="" />
        </div>

        <div className="fila">
          <div className="titulo_producto">ID del Producto</div>
          <div className="titulo_cantidad">Cantidad</div>
          <div className="titulo_total">Total</div>
        </div>
        {formRows.map((row, index) => (
          <>
            <div key={index} className="fila">
              <input
                type="text"
                className="input"
                name="id_producto"
                value={row.id_producto}
                onChange={(e) => handleChange(index, e)}
              />
              <div className="cantidad">
                <input
                  type="number"
                  className="input_cantidad"
                  name="cantidad"
                  value={row.cantidad}
                  onChange={(e) => handleChange(index, e)}
                />
                <span className="unidad">x 1000</span>
              </div>
              <button
                className="borrar-btn"
                onClick={() => handleRemoveRow(index)}
              />
              <div className="total">$5.000</div>
            </div>
            {index === formRows.length - 1 && (
              <>
                <button
                  className="boton-anadir"
                  type="button"
                  onClick={handleAddRow}
                >
                  Agregar
                </button>
              </>
            )}
          </>
        ))}
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

export default OrderForm;
