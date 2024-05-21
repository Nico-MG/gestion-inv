import React, { useState } from "react";
import "./orderform.css";

const OrderForm = (props) => {

  const { initialData, initialDetailData } = props;

  const [formData, setFormData] = useState({
    id_pedido: initialData?.id_pedido || "",
    rut_proveedor: initialData?.rut_proveedor || "",
    rut_usuario: initialData?.usuario || "",
    fecha: initialData?.cantidad || new Date().toISOString(),
    compra_total: initialData?.compra_total || "",
  });

  const [formRows, setFormRows] = useState({
    id_pedido: initialDetailData?.id_pedido || "",
    id_producto: initialDetailData?.id_producto || "",
    cantidad: initialDetailData?.cantidad || "",
    precio_unidad: initialDetailData?.precio_unidad || "",
    precio_total: initialDetailData?.precio_total || "",
  })

  // const initialRow = {
  //   id_pedido: "",
  //   id_producto: "",
  //   cantidad: "",
  //   precio_unidad: "",
  //   precio_total: "",
  // };

  // const [formRows, setFormRows] = useState([initialRow]);

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
    formData['compra_total'] = calculateCompraTotal();

    props.createTableRow(formData).then(() => handleSubmitRows().then(() => props.fetchData()))

    props.closeForm();
  };

  const handleSubmitRows = async () => {
    formRows.forEach((row) => {
      console.log(row);
      props.createDetailRow(row);
    });
  }

  const addDetailId = () => {
    const id_pedido = formData["id_pedido"];
    formRows.forEach((row) => {
      row.id_pedido = id_pedido;
    });

    setFormRows(...formRows);
  };

  const calculatePrecioTotal = (newRows, index) => {
    const cantidad = newRows[index]["cantidad"];
    const precio_unidad = newRows[index]["precio_unidad"];
    let precio_total = newRows[index]["precio_total"];
    cantidad != "" && precio_unidad != ""
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
        {props.mode === "modificar" ? "Modificar Pedido" : "Registro de Pedido"}
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
          <>
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
        <button className="cerrar-btn" onClick={props.closeForm}>
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
