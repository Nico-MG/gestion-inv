import React, { useState } from "react";
import ProductApi from "../../../../services/Api/product.service";
import {
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  marginBottom: "2vh",
  width: "75%",
  '& .MuiInputBase-input': {
    fontSize: '16px',
  },
});

const ProductForm = ({
  mode,
  initialData,
  closeForm,
  fetchData,
}) => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

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
        marginLeft: "120px",
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
        <Typography variant="h5" sx={{ color: "#ffffff", textAlign: "center", fontWeight: "bold" }}>
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
          <StyledTextField
            label="ID del producto"
            name="id_producto"
            value={formData.id_producto}
            onChange={handleChange}
            fullWidth
          />
          <StyledTextField
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            fullWidth
          />
          <StyledTextField
            label="Categoría"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            fullWidth
          />
          <StyledTextField
            label="Cantidad"
            name="cantidad"
            value={formData.cantidad}
            onChange={handleChange}
            fullWidth
          />
          <StyledTextField
            label="Cantidad mínima"
            name="min_cantidad"
            value={formData.min_cantidad}
            onChange={handleChange}
            fullWidth
          />
          <StyledTextField
            label="Precio"
            name="precio_venta"
            value={formData.precio_venta}
            onChange={handleChange}
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
              endIcon={<CloseIcon />}
              sx={{
                backgroundColor: "#266763",
                color: "#ffffff",
                fontSize: "0.8rem",
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
