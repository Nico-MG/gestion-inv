import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import { Box, CardMedia, Typography } from "@mui/material";
import {
  AttachMoney,
  Groups,
  Contacts,
  Notifications,
  Inventory,
  Leaderboard,
  LocalShipping,
  Loop,
  Help,
  Settings,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Orders from "../../Pages/Orders";
import Products from "../../Pages/Products";

const StyledTab = styled(Tab)({
  fontSize: "18px",
  color: "#fff",
  height: "43px",
  "&:hover": {
    backgroundColor: "#348d87",
  },
  marginBottom: "5px",
  [`&.Mui-selected::after`]: {
    display: "none",
  },
});

const Sidebar = () => {
  const [value, setValue] = React.useState("analytics");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          margin: 2,
          minHeight: "100vh",
          width: "300px",
          bgcolor: "#266763",
          borderRadius: "24px",
        }}
      >
        <Box marginLeft="15px">
          <Box display="flex" alignItems="center" gap={2}>
            <CardMedia
              component="img"
              alt="StockBox"
              image="/src/images/logo_2.png"
              style={{ height: "65px", width: "65px", borderRadius: "50%" }}
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
              marginTop: 5,
              width: "100%",
              height: "100%",
              bgcolor: "#266763",
              borderRadius: "24px",
            }}
          >
            <TabList
              disableUnderline
              sx={{
                p: 0.5,
                gap: 0.5,
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
                <StyledTab value="notifications" label="Notificaciones">
                  <Notifications /> Alertas
                </StyledTab>
              </Box>

              <Box sx={{ position: "fixed", bottom: "20px" }}>
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
      {value === "orders" && <Orders />}
    </>
  );
};

export default Sidebar;
