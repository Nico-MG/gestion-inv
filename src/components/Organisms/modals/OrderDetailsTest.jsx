import React from "react";
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
        id_producto: "107",
        cantidad: 1,
        precio_unidad: 50,
        precio_total: 50,
      },
      {
        id_pedido: "1",
        id_producto: "108",
        cantidad: 1,
        precio_unidad: 50,
        precio_total: 50,
      },
      {
        id_pedido: "1",
        id_producto: "109",
        cantidad: 1,
        precio_unidad: 50,
        precio_total: 50,
      },

    ],
  }

const OrderDetailsTest = ({ data, closeModal }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-25%)",
        top: "20%",
        width: "80vw",
        maxWidth: "600px",
        maxHeight: "90vh",
        bgcolor: theme.palette.background.default,
        boxShadow: 15,
        borderRadius: "15px",
      }}
    >

      <Box sx={{ p: 5 }}>
        <Typography>
          <strong>RUT Proveedor:</strong> {or_data.rut_proveedor}
        </Typography>
        <Typography>
          <strong>RUT Usuario:</strong> {or_data.rut_usuario}
        </Typography>

        <Box sx={{ maxHeight: "300px", overflowY: "auto", mt: 2 }}> 
            <Stack spacing={2} sx={{ mt: 2 }}>
                <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>ID</th>
                        <th style={{ textAlign: "center" }}>Precio Unitario</th>
                        <th style={{ textAlign: "center" }}>Cantidad</th>
                        <th style={{ textAlign: "center" }}>Precio ... </th>
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
          Esto va en la esquina: ${or_data.compra_total}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
        }}
      >
      </Box>
    </Box>
  );
};

export default OrderDetailsTest;
