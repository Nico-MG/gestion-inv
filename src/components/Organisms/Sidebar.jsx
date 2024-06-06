import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
import Orders from "../Pages/Orders";
import Products from "../Pages/Products";

const Sidebar = () => {
  const [value, setValue] = useState("analytics");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
          <img
            src="/src/images/logo_2.png"
            alt="StockBox"
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
            alignItems: "left",
          }}
        >
          <Tab
            value="analytics"
            label={
              <Typography>
                <Leaderboard sx={{ mr: 1 }} />
                Analíticas
              </Typography>
            }
          />
          <Tab
            value="sales"
            label={
              <Typography>
                <AttachMoney sx={{ mr: 1 }} />
                Ventas
              </Typography>
            }
          />
          <Tab
            value="refunds"
            label={
              <Typography>
                <Loop sx={{ mr: 1 }} />
                Devoluciones
              </Typography>
            }
          />
          <Tab
            value="orders"
            label={
              <Typography>
                <LocalShipping sx={{ mr: 1 }} />
                Pedidos
              </Typography>
            }
          />
          <Tab
            value="products"
            label={
              <Typography>
                <Inventory sx={{ mr: 1 }} />
                Productos
              </Typography>
            }
          />
          <Tab
            value="clients"
            label={
              <Typography>
                <Groups sx={{ mr: 1 }} />
                Clientes
              </Typography>
            }
          />
          <Tab
            value="providers"
            label={
              <Typography>
                <Contacts sx={{ mr: 1 }} />
                Proveedores
              </Typography>
            }
          />
          <Tab
            value="help"
            label={
              <Typography>
                <Help sx={{ mr: 1 }} />
                Ayuda y soporte
              </Typography>
            }
          />
          <Tab
            value="settings"
            label={
              <Typography>
                <Settings sx={{ mr: 1 }} />
                Configuración
              </Typography>
            }
          />
        </Tabs>
      </Box>
      {value === "products" && <Products />}
      {value === "orders" && <Orders />}
    </Box>
  );
};

export default Sidebar;
