import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import Box from "@mui/material/Box";
import { Groups, Contacts, Notifications } from "@mui/icons-material";

export default function MUISidebar() {
  const [value, setValue] = React.useState("analitica");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("Valor:", newValue); // Mostrar solo el valor seleccionado
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        orientation="vertical"
        sx={{ minWidth: 300, height: 160 }}
      >
        <TabList
          disableUnderline
          sx={{
            p: 0.5,
            gap: 0.5,
            borderRadius: "xl",
            bgcolor: "background.level1",
            [`& .${tabClasses.root}[aria-selected="true"]`]: {
              boxShadow: "sm",
              bgcolor: "background.surface",
            },
            "& .Mui-selected::after": {
              display: "none",
            },
          }}
        >
          <Tab value="analytics" label="Analiticas">
            Analíticas
          </Tab>
          <Tab value="sales" label="Ventas">
            Ventas
          </Tab>
          <Tab value="refunds" label="Devoluciones">
            Devoluciones
          </Tab>
          <Tab value="orders" label="Pedidos">
            Pedidos
          </Tab>
          <Tab value="clients" label="Clientes">
            <Groups /> Clientes
          </Tab>
          <Tab value="providers" label="Proveedores">
            <Contacts /> Proveedores
          </Tab>
          <Tab value="notifications" label="Notificaciones">
            <Notifications /> Alertas
          </Tab>
          <Tab value="informs" label="Informes">
            Informes
          </Tab>
          <Tab value="history" label="Historial">
            Historial
          </Tab>
          <Tab value="help" label="Ayuda">
            Ayuda y Soporte
          </Tab>
          <Tab value="settings" label="Configuracion">
            Configuración
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
}
