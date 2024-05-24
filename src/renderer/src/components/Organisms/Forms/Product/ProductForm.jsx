import React, { useState } from "react";
import { ApiProducts } from "../../../../services/apiService";
import "./productform.css";

const ProductForm = (props) => {
  const { mode, initialData, setInitialData, closeForm, fetchData } = props;

  const [formData, setFormData] = useState({
    id_producto: initialData?.id_producto || "",
    nombre: initialData?.nombre || "",
    categoria: initialData?.categoria || "",
    cantidad: initialData?.cantidad || "",
    min_cantidad: initialData?.min_cantidad || "",
    precio_venta: initialData?.precio_venta || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setInitialData && setInitialData(null)
    closeForm();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);

    if (mode === "modify") {
      ApiProducts.updateProduct(initialData.id_producto, formData).then(() =>
        fetchData()
      );
    } else {
      ApiProducts.createProduct(formData).then(() => fetchData());
    }

    handleClose();
  };

  return (
    <div style={{ zIndex: 1 }} id="ventana_flotante">
      <div className="titulo">
        {mode === "modify" ? "Modificar producto" : "Registro de Productos"}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="contenido">
          <div className="fila centradao">
            <div className="etiqueta">ID del producto:</div>
            <input
              type="text"
              className="input"
              name="id_producto"
              value={formData.id_producto}
              onChange={handleChange}
            />
          </div>
          <div className="fila centrado">
            <div className="etiqueta">Nombre:</div>
            <input
              type="text"
              className="input"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="fila centrado">
            <div className="etiqueta">Categoría:</div>
            <input
              type="text"
              className="input"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
            />
          </div>
          <div className="fila centrado">
            <div className="etiqueta">Cantidad:</div>
            <input
              type="text"
              className="input"
              name="cantidad"
              value={formData.cantidad}
              onChange={handleChange}
            />
          </div>
          <div className="fila centrado">
            <div className="etiqueta">Min_Cantidad:</div>
            <input
              type="text"
              className="input"
              name="min_cantidad"
              value={formData.min_cantidad}
              onChange={handleChange}
            />
          </div>
          <div className="fila centrado">
            <div className="etiqueta">Precio:</div>
            <input
              type="text"
              className="input"
              name="precio_venta"
              value={formData.precio_venta}
              onChange={handleChange}
            />
          </div>
          <div className="opciones">
            <button className="cerrar-btn" onClick={handleClose}>
              Cerrar
            </button>
            <button className="guardar-btn" type="submit">
              {mode === "modify" ? "Modificar" : "Guardar"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
