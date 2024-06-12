import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/material"
import { Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const or_data = {
    id_pedido: "1",
    rut_proveedor: "12345678-9",
    rut_usuario: "98765432-1",
    fecha: "2023-06-01",
    compra_total: "150",
    detalle_pedido: [
      {
        id_pedido: "1",
        id_producto: "101",
        cantidad: 2,
        precio_unidad: 50,
        precio_total: 100,
      },
      {
        id_pedido: "1",
        id_producto: "102",
        cantidad: 1,
        precio_unidad: 50,
        precio_total: 50,
      },
      {
        id_pedido: "1",
        id_producto: "103",
        cantidad: 1,
        precio_unidad: 50,
        precio_total: 50,
      },
      {
        id_pedido: "1",
        id_producto: "104",
        cantidad: 1,
        precio_unidad: 50,
        precio_total: 50,
      },
      {
        id_pedido: "1",
        id_producto: "105",
        cantidad: 1,
        precio_unidad: 50,
        precio_total: 50,
      },
      {
        id_pedido: "1",
        id_producto: "106",
        cantidad: 1,
        precio_unidad: 50,
        precio_total: 50,
      },
      {
        id_pedido: "1",
        id_producto: "107",
        cantidad: 1,
        precio_unidad: 50,
        precio_total: 50,
      },
    ],
  }

const OrderDetails = ({ data, closeModal }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-25%)",
        top: "10%",
        width: "80vw",
        maxWidth: "600px",
        maxHeight: "90vh",
        bgcolor: theme.palette.background.default,
        boxShadow: 15,
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ mb: 1, pl: 3, pt: 3, pb: 1.5 }}>
            Total venta:
          </Typography>
          <Typography variant="h4" sx={{ mb: 1, pl: 3, pb: 3 }}>
            ${or_data.compra_total}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ textAlign: "right", pr: 3 }}>
            Nº Pedido: {or_data.id_pedido}
          </Typography>
          <Typography sx={{ textAlign: "right", pr: 3 }}>
            Fecha: {or_data.fecha}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ p: 5 }}>
        <Typography>
          <strong>RUT Proveedor:</strong> {or_data.rut_proveedor}
        </Typography>
        <Typography>
          <strong>RUT Usuario:</strong> {or_data.rut_usuario}
        </Typography>

        <Box sx={{ maxHeight: "150px", overflowY: "auto", mt: 2 }}> {/* Añadido el contenedor con scroll */}
          <Stack spacing={2} sx={{ mt: 2 }}>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>ID</th>
                  <th style={{ textAlign: "center" }}>Precio Unitario</th>
                  <th style={{ textAlign: "center" }}>Cantidad</th>
                  <th style={{ textAlign: "center" }}>Precio (=total) </th>
                </tr>
              </thead>
              <tbody>
                {or_data.detalle_pedido.map((item, index) => (
                  <tr key={index}>
                    <td style={{ textAlign: "center" }}>{item.id_producto}</td>
                    <td style={{ textAlign: "center" }}>${item.precio_unidad}</td>
                    <td style={{ textAlign: "center" }}>{item.cantidad}</td>
                    <td style={{ textAlign: "center" }}>${item.precio_total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Stack>
        </Box>

        <Typography variant="h6" sx={{ mt: 3, textAlign: "center" }}>
          Total: ${or_data.compra_total}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Button
          variant="contained"
          endIcon={<CloseIcon />}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            fontSize: "0.8rem",
            width: "150px",
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
            },
            margin: "0 auto",
          }}
          onClick={closeModal}
        >
          Cerrar
        </Button>
      </Box>
    </Box>
  );
};

export default OrderDetails;