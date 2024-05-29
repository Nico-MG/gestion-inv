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
        borderRadius: "15px",
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
            label="Categoría"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            sx={{ mb: 2 }}
            fullWidth
          />
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
                '&:hover': {
                  backgroundColor: "#c3fa7b",
                  color: "#7e7e7e",
                }
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
                '&:hover': {
                  backgroundColor: "#c3fa7b",
                  color: "#7e7e7e",
                }
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
