import React, { useState, useEffect } from "react";
import "./orderform.css";
import { ApiOrders } from "../services/apiService";

const OrderForm = (props) => {
  const { initialData, initialDetailData, mode } = props;
  const initialRow = {
    id_pedido: "",
    id_producto: "",
    cantidad: "",
    precio_unidad: "",
    precio_total: "",
  };

  const [formData, setFormData] = useState({
    id_pedido: initialData?.id_pedido || "",
    rut_proveedor: initialData?.rut_proveedor || "",
    rut_usuario: initialData?.usuario || "123456789",
    fecha: initialData?.cantidad || new Date().toISOString(),
    compra_total: initialData?.compra_total || "",
  });

  const [formRows, setFormRows] = useState(
    initialDetailData && initialDetailData.length > 0
      ? initialDetailData.map((detail) => ({
          id_pedido: detail.id_pedido || "",
          id_producto: detail.id_producto || "",
          cantidad: detail.cantidad || "",
          precio_unidad: detail.precio_unidad || "",
          precio_total: detail.precio_total || "",
        }))
      : [initialRow]
  );

  const [originalProductIds, setOriginalProductIds] = useState(
    initialDetailData ? initialDetailData.map((detail) => detail.id_producto) : []
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeDetail = (index, e) => {
    const { name, value } = e.target;
    let newRows = [...formRows];
    newRows[index][name] = value;
    newRows = calculatePrecioTotal(newRows, index);
    setFormRows(newRows);
  };

  const handleClose = () => {
    props.setInitialData(null);
    props.setInitialDetailData(null);
    props.closeForm();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    addDetailId();
    formData["compra_total"] = calculateCompraTotal();

    try {
      if (mode === "modify") {
        await props.updateTableRow(initialData.id_pedido, formData);
        await handleSubmitRows();
        await handleDeleteRemovedRows();
      } else {
        await props.createTableRow(formData);
        await handleSubmitRows();
      }
      props.fetchData();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }

    console.log("Detalle inicial:", initialDetailData);

    handleClose();
  };

  const handleSubmitRows = async () => {
    const promises = formRows.map(async (row) => {
      try {
        const response = await ApiOrders.getDetailOrder(
          formData.id_pedido,
          row.id_producto
        );
        if (response) {
          await props.updateDetailRow(formData.id_pedido, row.id_producto, row);
        } else {
          await props.createDetailRow(row);
        }
      } catch (error) {
        console.error("Error al obtener detalle de pedido:", error);
      }
    });
    await Promise.all(promises);
  };

  const handleDeleteRemovedRows = async () => {
    const currentProductIds = formRows.map((row) => row.id_producto);
    const productIdsToDelete = originalProductIds.filter(
      (id) => !currentProductIds.includes(id)
    );

    const deletePromises = productIdsToDelete.map(async (id_producto) => {
      try {
        const response = await ApiOrders.deleteDetailOrder(
          formData.id_pedido,
          id_producto
        );
        if (response.status === 200 || response.status === 404) {
          console.log("Detalle eliminado exitosamente o no encontrado");
        } else {
          console.error("Error inesperado al eliminar el detalle del pedido");
        }
      } catch (error) {
        console.error("Error al eliminar el detalle del pedido:", error);
      }
    });
    await Promise.all(deletePromises);
  };

  const addDetailId = () => {
    const id_pedido = formData["id_pedido"];
    formRows.forEach((row) => {
      row.id_pedido = id_pedido;
    });

    setFormRows([...formRows]);
  };

  const calculatePrecioTotal = (newRows, index) => {
    const cantidad = newRows[index]["cantidad"];
    const precio_unidad = newRows[index]["precio_unidad"];
    let precio_total = newRows[index]["precio_total"];
    cantidad !== "" && precio_unidad !== ""
      ? (precio_total = cantidad * precio_unidad)
      : (precio_total = 0);

    newRows[index]["precio_total"] = precio_total;

    return newRows;
  };

  const calculateCompraTotal = () => {
    let compra_total = 0;
    for (const row of formRows) {
      const cantidad = parseInt(row.cantidad);
      const precio_unidad = parseInt(row.precio_unidad);
      if (!isNaN(cantidad) && !isNaN(precio_unidad)) {
        compra_total += cantidad * precio_unidad;
      }
    }
    return compra_total;
  };

  return (
    <form style={{ zIndex: 1 }} id="ventana_flotante" onSubmit={handleSubmit}>
      <div className="titulo">
        {props.mode === "modify" ? "Modificar Pedido" : "Registro de Pedido"}
      </div>
      <div className="contenido">
        <div className="fila centrado">
          <div className="etiqueta">ID del pedido:</div>
          <input
            type="text"
            className="input"
            name="id_pedido"
            value={formData.id_pedido}
            onChange={handleChange}
          />
        </div>

        <div className="fila centrado">
          <div className="etiqueta">RUT de la Empresa:</div>
          <input
            type="text"
            className="input"
            name="rut_proveedor"
            value={formData.rut_proveedor}
            onChange={handleChange}
          />
        </div>

        <div className="fila">
          <div className="titulo_producto">ID del Producto</div>
          <div className="titulo_cantidad">Cantidad</div>
          <div className="titulo_precio">Precio</div>
          <div className="titulo_total">Total</div>
        </div>
        {formRows.map((row, index) => (
          <div key={index} className="fila">
            <input
              type="text"
              className="input_producto"
              name="id_producto"
              value={row.id_producto}
              onChange={(e) => handleChangeDetail(index, e)}
            />
            <div className="cantidad">
              <input
                type="number"
                className="input_cantidad"
                name="cantidad"
                value={row.cantidad}
                onChange={(e) => handleChangeDetail(index, e)}
              />
              <span className="unidad">
                x
                <input
                  type="number"
                  className="input_unidad"
                  name="precio_unidad"
                  value={row.precio_unidad}
                  onChange={(e) => handleChangeDetail(index, e)}
                />
              </span>
            </div>
            <button
              className="borrar-btn"
              type="button"
              onClick={() => handleRemoveRow(index)}
            />
            <div className="total">{row.precio_total}</div>
          </div>
        ))}
        <button
          className="boton-anadir"
          type="button"
          onClick={handleAddRow}
        >
          Agregar
        </button>
      </div>
      <div className="boton-opciones">
        <button className="cerrar-btn" onClick={handleClose}>
          Cerrar
        </button>
        <button className="guardar-btn" type="submit">
          {props.mode === "modify" ? "Modificar" : "Guardar"}
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
