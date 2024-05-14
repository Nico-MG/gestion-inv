import React, { useState } from "react";
import "./orderform.css";

const FormPedido = ({
  createTuple,
  updateTuple,
  mode,
  closeForm,
  initialData,
  fetchData,
}) => {
  const [formData, setFormData] = useState(
    initialData || {
      id_pedido: "",
      rut_proveedor: "",
      rut_usuario: "",
      fecha: "",
      compra_total: "",
    }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (mode === "modify") {
      updateTuple(initialData.id, formData);
    } else {
      createTuple(formData);
    }

    closeForm();
  };

  return (
    <form style={{ zIndex: 1 }} id="ventana_flotante" onSubmit={handleSubmit}>
      <div className="titulo">
        {mode === "modificar" ? "Modificar Pedido" : "Registro de Pedido"}
      </div>
      <div className="contenido">
        <div className="fila centrado">
          <div className="etiqueta">RUT de la Empresa:</div>
          <input type="text" className="input" value="20.655.222-2" />
        </div>
        <div className="fila centrado">
          <div className="etiqueta">Área del pedido:</div>
        </div>
        <div className="fila">
          <div className="titulo_producto">ID del Producto</div>
          <div className="titulo_cantidad">Cantidad</div>
          <div className="titulo_total">Total</div>
        </div>
        <div className="fila">
          <input type="text" className="input_producto" value="Nombre" />
          <div className="cantidad">
            <input type="number" className="input_cantidad" value="1" />
            <span className="unidad">x 1000</span>
          </div>
          <div className="total">$5.000</div>
        </div>
        <div className="fila">
        </div>
        <div className="fila">
          <div className="total">Total</div>
          <div className="total">$15.000</div>
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
