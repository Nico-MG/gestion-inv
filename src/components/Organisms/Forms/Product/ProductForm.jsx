import React, { useState } from "react";
import ProductApi from "../../../../services/Api/product.service";
import { Button, TextField, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  marginBottom: "2vh",
  width: "75%",
  "& .MuiInputBase-input": {
    fontSize: "16px",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#9bc661",
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: "#9bc661",
  },
});

const ProductForm = ({ mode, initialData, closeForm, fetchData }) => {
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
  
  const [errors, setErrors] = useState({});
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    formData.cantidad = Number(formData.cantidad)
    formData.min_cantidad = Number(formData.min_cantidad)
    formData.precio_venta = Number(formData.precio_venta)

    console.log(formData)
    if (!formData.id_producto || typeof formData.id_producto !== "string") {
      newErrors.id_producto = 'Username is required';
    }
    if (!formData.nombre || typeof formData.nombre !== "string") {
      newErrors.nombre = "Nombre es requerido";
    }
    if (!formData.categoria || typeof formData.categoria !== "string") {
      newErrors.categoria = "Categoría es requerida";
    }
    if (Number.isNaN(formData.cantidad) || !formData.cantidad || formData.cantidad < 0) {
      formData.cantidad = ''
      newErrors.cantidad = "Cantidad debe ser un número válido";
    }
    if (Number.isNaN(formData.min_cantidad) || !formData.min_cantidad || formData.min_cantidad < 0 || formData.cantidad < formData.min_cantidad) {
      formData.min_cantidad = ''
      newErrors.min_cantidad = "Cantidad mínima debe ser un número válido";
    }
    if (Number.isNaN(formData.precio_venta) || !formData.precio_venta || formData.precio_venta < 0) {
      formData.precio_venta = ''
      newErrors.precio_venta = "Precio de venta debe ser un número válido";
    }

    // Verificar si hay errores
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (mode === "modify") {
      ProductApi.updateProduct(initialData.id_producto, formData).then(() =>
        fetchData()
      );
    } else {
      ProductApi.createProduct(formData).then(() => fetchData());
    }

    closeForm();
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
        left: "60%",
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
        <Typography
          variant="h5"
          sx={{ color: "#ffffff", textAlign: "center", fontWeight: "bold" }}
        >
          {mode === "modify" ? "Modificar producto" : "Registrar producto"}
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            marginTop: 4,
            minWidth: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 5,
          }}
        >
          <StyledTextField
            label="ID del producto"
            name="id_producto"
            value={formData.id_producto}
            onChange={handleChange}
            error={!!errors.id_producto}
        helperText={errors.id_producto}
          />
          <StyledTextField
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            error={!!errors.nombre}
        helperText={errors.nombre}
          />
          <StyledTextField
            label="Categoría"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            error={!!errors.categoria}
        helperText={errors.categoria}
          />
          <StyledTextField
            label="Cantidad"
            name="cantidad"
            value={formData.cantidad}
            onChange={handleChange}
            error={!!errors.cantidad}
        helperText={errors.cantidad}
          />
          <StyledTextField
            label="Cantidad mínima"
            name="min_cantidad"
            value={formData.min_cantidad}
            onChange={handleChange}
            error={!!errors.min_cantidad}
        helperText={errors.min_cantidad}
          />
          <StyledTextField
            label="Precio"
            name="precio_venta"
            value={formData.precio_venta}
            onChange={handleChange}
            error={!!errors.precio_venta}
        helperText={errors.precio_venta}
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
              endIcon={<CloseIcon />}
              sx={{
                backgroundColor: "#266763",
                color: "#ffffff",
                fontSize: "0.8rem",
                width: "150px",
                "&:hover": {
                  backgroundColor: "#c3fa7b",
                  color: "#7e7e7e",
                },
              }}
              onClick={closeForm}
            >
              Cerrar
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#266763",
                color: "#ffffff",
                fontSize: "0.8rem",
                width: "150px",
                "&:hover": {
                  backgroundColor: "#c3fa7b",
                  color: "#7e7e7e",
                },
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
