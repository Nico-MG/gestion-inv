import React, { useState } from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import { Box, CardMedia, Typography } from "@mui/material";
import {
  AttachMoney,
  Groups,
  Contacts,
  Inventory,
  Leaderboard,
  LocalShipping,
  Loop,
  Help,
  Settings,
} from "@mui/icons-material"; 
import { styled } from "@mui/material/styles";
import Orders from "../Pages/Orders";
import Products from "../Pages/Products";

const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: "18px",
  color: "#fff",
  height: "15px",
  width: "130%",
  "&:hover": {
    backgroundColor: "#348d87",
  },
  marginBottom: "5px",
  [`&.Mui-selected::after`]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    ".menu-text": {
      display: "none", // Ocultar el texto cuando el ancho de pantalla es menor que el breakpoint sm (600px por defecto)
    },
  },
}));

const Sidebar = () => {
  const [value, setValue] = useState("analytics");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "20%",
          minHeight: "80vh",
          minWidth: "60px",
          bgcolor: "#266763",
          borderRadius: "24px",
          display: "flex",
        }}
      >
        <Box width="80%" height="100%">
          <Box 
            display="flex" 
            alignItems="center" 
            gap="5%" 
            padding="5%"
          >
            <CardMedia
              component="img"
              alt="StockBox"
              image="/src/images/logo_2.png"
              style={{
                minHeight: "55px",
                minWidth: "55px",
                borderRadius: "50%",
                height: "35%",
                width: "35%",
              }}
            />
            <Typography variant="h5" sx={{ color: "#fff" }}>
              StockBox
            </Typography>
          </Box>

          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            orientation="vertical"
            sx={{
              width: "80%",
              height: "80%",
              bgcolor: "#266763",
              borderRadius: "24px",
            }}
          >
            <TabList
              disableUnderline
              sx={{
                height: "100%",
                gap: "0.5%",
                borderRadius: "xl",
                [`& .${tabClasses.root}[aria-selected="true"]`]: {
                  boxShadow: "sm",
                  bgcolor: "#c3fa7b",
                  color: "#266763",
                  borderRadius: "32px",
                },
                [`& .${tabClasses.root}[aria-selected="false"]`]: {
                  "&:hover": {
                    bgcolor: "#348d87",
                    color: "#fff",
                    borderRadius: "32px",
                  },
                },
              }}
            >
              <Box>
                <StyledTab value="analytics" label="Analiticas">
                  <Leaderboard /> Analíticas
                </StyledTab>
                <StyledTab value="sales" label="Ventas">
                  <AttachMoney /> Ventas
                </StyledTab>
                <StyledTab value="refunds" label="Devoluciones">
                  <Loop /> Devoluciones
                </StyledTab>
                <StyledTab value="orders" label="Pedidos">
                  <LocalShipping /> Pedidos
                </StyledTab>
                <StyledTab value="products" label="Productos">
                  <Inventory /> Productos
                </StyledTab>
                <StyledTab value="clients" label="Clientes">
                  <Groups /> Clientes
                </StyledTab>
                <StyledTab value="providers" label="Proveedores">
                  <Contacts /> Proveedores
                </StyledTab>
              </Box>

              <Box sx={{ bottom: "2%" }}>
                <StyledTab value="help" label="Ayuda">
                  <Help /> Ayuda y Soporte
                </StyledTab>
                <StyledTab value="settings" label="Configuracion">
                  <Settings /> Configuración
                </StyledTab>
              </Box>
            </TabList>
          </Tabs>
        </Box>
      </Box>
      {value === "products" && <Products />}
      {/* {value === "orders" && <Orders />} */}
    </>
  );
};

export default Sidebar;
