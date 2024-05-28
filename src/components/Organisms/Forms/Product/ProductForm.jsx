import React, { useState } from "react";
import ProductApi from "../../../../services/Api/product.service";
import {
  Button,
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const ProductForm = ({
  mode,
  initialData,
  setInitialData,
  closeForm,
  fetchData,
}) => {
  console.log("initialData:", initialData);

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
    setInitialData && setInitialData(null);
    closeForm();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (mode === "modify") {
      ProductApi.updateProduct(initialData.id_producto, formData).then(() =>
        fetchData()
      );
    } else {
      ProductApi.createProduct(formData).then(() => fetchData());
    }

    handleClose();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80vw",
        maxWidth: "600px",
        maxHeight: "90vh",
        overflow: "hidden",
        bgcolor: "#ffffff",
        border: "1.5px solid #266763",
        borderRadius: "20px",
        p: 2,
      }}
    >
      <Box
        sx={{
          bgcolor: "#266763",
          borderRadius: "10px",
          width: "100vw",
          position: "fixed",
          top: 0,
          p: 1,
        }}
      >
        <Typography variant="h5" sx={{ color: "#ffffff", textAlign: "center" }}>
          {mode === "modify" ? "Modificar producto" : "Registrar producto"}
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 5,
          }}
        >
          <TextField
            label="ID del producto"
            name="id_producto"
            value={formData.id_producto}
            onChange={handleChange}
            sx={{ mb: 2 }}
            fullWidth
          />
          <TextField
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            sx={{ mb: 2 }}
            fullWidth
          />
          <TextField
            select
            label="Categoría"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            sx={{ mb: 2 }}
            fullWidth
          >
            <MenuItem value={"categoria1"}>Categoría 1</MenuItem>
            <MenuItem value={"categoria2"}>Categoría 2</MenuItem>
            <MenuItem value={"categoria3"}>Categoría 3</MenuItem>
          </TextField>
          <TextField
            label="Cantidad"
            name="cantidad"
            value={formData.cantidad}
            onChange={handleChange}
            sx={{ mb: 2 }}
            fullWidth
          />
          <TextField
            label="Cantidad mínima"
            name="min_cantidad"
            value={formData.min_cantidad}
            onChange={handleChange}
            sx={{ mb: 2 }}
            fullWidth
          />
          <TextField
            label="Precio"
            name="precio_venta"
            value={formData.precio_venta}
            onChange={handleChange}
            sx={{ mb: 2 }}
            fullWidth
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              p: 2,
              gap: 2,
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#266763",
                color: "#ffffff",
                fontSize: "0.8rem",
              }}
              onClick={handleClose}
            >
              Cerrar
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#266763",
                color: "#ffffff",
                fontSize: "0.8rem",
              }}
              type="submit"
            >
              {mode === "modify" ? "Modificar" : "Guardar"}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default ProductForm;

/* <div style={{ zIndex: 1 }} id="ventana_flotante">
<div className="titulo">
  {mode === "modify" ? "Modificar producto" : "Registrar producto"}
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
      <button className="cerrar-btn" type="button" onClick={handleClose}>
        Cerrar
      </button>
      <button className="guardar-btn" type="submit">
        {mode === "modify" ? "Modificar" : "Guardar"}
      </button>
    </div>
  </div>
</form>
</div> */
