import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import ProductApi from "../../../services/api/product.service";
import {
  Button,
  TextField,
  Box,
  Typography,
  MenuItem,
  Autocomplete,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";
import { sendNotification } from "@tauri-apps/api/notification";

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

const ProductForm = ({
  mode,
  initialData,
  closeForm,
  fetchData,
  categories,
}) => {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    idp: initialData?.idp || "",
    nombre: initialData?.nombre || "",
    cat: initialData?.cat || "",
    cit: initialData?.cit || "",
    mCit: initialData?.mCit || "",
    precio: initialData?.precio || "",
  });

  console.log(categories);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (JSON.stringify(formData) === JSON.stringify(initialData)) {
      return;
    }

    console.log(formData.cat)

    setLoading(true);

    const newErrors = {};

    console.log("formData:", formData);

    if (formData.idp.trim() === "") {
      newErrors.idp = "ID del producto es requerido";
    }

    if (formData.nombre.trim() === "") {
      newErrors.nombre = "Nombre es requerido";
    }

    if (formData.cat.trim() === "") {
      newErrors.cat = "Categoría es requerida";
    }

    if (typeof formData.cit === "string") {
      if (formData.cit.trim() === "") {
        newErrors.cit = "Cantidad es requerida";
      } else {
        if (
          !Number.isInteger(parseFloat(formData.cit.trim())) ||
          !Number.isInteger(Number(formData.cit.trim())) ||
          Number(formData.cit < 0)
        ) {
          newErrors.cit = "Cantidad debe ser un número entero válido";
        }
      }
    }

    if (typeof formData.mCit === "string") {
      if (formData.mCit.trim() === "") {
        newErrors.mCit = "Cantidad mínima es requerida";
      } else {
        if (
          !Number.isInteger(parseFloat(formData.mCit.trim())) ||
          Number(formData.mCit < 0) ||
          !Number.isInteger(Number(formData.mCit.trim()))
        ) {
          newErrors.mCit = "Cantidad mínima debe ser un número entero válido";
        }
      }
    }

    if (typeof formData.precio === "string") {
      if (formData.precio.trim() === "") {
        newErrors.precio = "Precio de venta es requerido";
      } else {
        if (
          !Number.isInteger(parseFloat(formData.precio.trim())) ||
          Number(formData.precio < 0) ||
          !Number.isInteger(Number(formData.precio.trim()))
        ) {
          newErrors.precio = "Precio de venta debe ser un número entero válido";
        }
      }
    }

    // Verificar si hay errores
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    Object.keys(formData).forEach((key) => {
      key === "cit" || key === "mCit" || key === "precio"
        ? (formData[key] = parseInt(formData[key]))
        : (formData[key] = formData[key].trim());
    });

    if (mode === "modify") {
      try {
        await ProductApi.updateProduct(initialData.idp, formData);
        await fetchData();

        sendNotification(`Modificado producto con ID: ${initialData.idp}`);

        setLoading(false);

        closeForm();
      } catch (error) {
        setLoading(false);
        // alert(`Error al modificar producto: ${error}`);
        sendNotification(
          `Hubo un error, asegúrate de no ingresar caracteres especiales y no repetir ID`
        );
      }
    } else {
      try {
        await ProductApi.createProduct(formData);
        await fetchData();

        console.log("Data enviada:", formData);

        sendNotification(`Creado producto con ID: ${formData.idp}`);

        setLoading(false);

        closeForm();
      } catch (error) {
        // alert(`Error al crear producto: ${error}`);
        sendNotification(`Se produjo un erro: ${error.message}`);

        setLoading(false);
      }
    }
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
            name="idp"
            value={formData.idp}
            onChange={handleChange}
            error={!!errors.idp}
            helperText={errors.idp}
            inputProps={{
              maxLength: 20,
            }}
          />
          <StyledTextField
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            error={!!errors.nombre}
            helperText={errors.nombre}
            inputProps={{
              maxLength: 20,
            }}
          />

          <Autocomplete
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "& .MuiSvgIcon-root": {
                color: theme.palette.secondary.contrastText,
              },
            }}
            options={categories}
            value={formData.cat}
            freeSolo
            renderInput={(params) => (
              <StyledTextField
                {...params}
                label="Categoría"
                name="cat"
                value={formData.cat}
                onChange={handleChange}
                error={!!errors.cat}
                helperText={errors.cat}
                inputProps={{
                  ...params.inputProps,
                  maxLength: 20,
                }}
              />
            )}
          />

          <StyledTextField
            label="Cantidad"
            name="cit"
            value={formData.cit}
            onChange={handleChange}
            error={!!errors.cit}
            helperText={errors.cit}
            inputProps={{
              maxLength: 20,
            }}
          />
          <StyledTextField
            label="Cantidad mínima"
            name="mCit"
            value={formData.mCit}
            onChange={handleChange}
            error={!!errors.mCit}
            helperText={errors.mCit}
            inputProps={{
              maxLength: 20,
            }}
          />
          <StyledTextField
            label="Precio"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            error={!!errors.precio}
            helperText={errors.precio}
            inputProps={{
              maxLength: 20,
            }}
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
            <LoadingButton
              variant="contained"
              loading={loading}
              loadingPosition="end"
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
            </LoadingButton>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default ProductForm;
