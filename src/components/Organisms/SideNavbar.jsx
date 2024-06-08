import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { TabContext, TabList } from "@mui/lab";
import { Box, CardMedia, Typography, Tab, Grid, Tooltip } from "@mui/material";
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
  color: theme.palette.primary.contrastText,
  height: "100%",
  
  textTransform: "none",
  marginBottom: "1.5%",
}));

const Sidebar = () => {
  const theme = useTheme();
  const [value, setValue] = useState("analytics");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= theme.breakpoints.values.md);
    };
    window.addEventListener("resize", handleResize);
    // Limpia el evento de cambio de tamaño al desmontar el componente
    return () => {
      setIsSmallScreen(window.innerWidth <= theme.breakpoints.values.md);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={2} md={3}>
      <Box
        sx={{
          margin: 2,
          height: "100%",
          minHeight: "100vh",
          bgcolor: theme.palette.primary.main,
          borderRadius: "24px",
        }}
      >
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent={isSmallScreen ? "center" : "left"}
          >
            <CardMedia
              component="img"
              alt="StockBox"
              image="/src/images/logo_2.png"
              style={{
                padding: "5%",
                width: isSmallScreen ? "60px" : "75px",
                height: "auto",
                borderRadius: "50%",
              }}
            />
            {!isSmallScreen && (
              <Box display="flex" alignItems="center" flexDirection="column">
                <Typography variant="h5" color="primary.contrastText">
                  StockBox
                </Typography>
                <Typography variant="h6" color="primary.contrastText">
                  Menú
                </Typography>
              </Box>
            )}
          </Box>

          <TabContext value={value}>
            <Box
              p="4%"
              sx={{
                width: "auto",
                height: "100%",
                bgcolor: "#266763",
                borderRadius: "24px",
              }}
            >
              <TabList
                disableUnderline
                orientation="vertical"
                onChange={handleChange}
                sx={{
                  "& .MuiTabs-flexContainer": {
                    alignItems: isSmallScreen ? "center" : "left",
                  },
                  "& .MuiTab-root": {
                    minWidth: 0,
                    width: isSmallScreen ? "50px" : "auto",
                    "&:not(.Mui-selected)": {
                      "&:hover": {
                        backgroundColor: theme.palette.primary.light,
                        borderRadius: "32px",
                      },
                    },
                  },
                  "& .Mui-selected": {
                    color: theme.palette.primary.main,
                    boxShadow: "sm",
                    bgcolor: "#c3fa7b",
                    borderRadius: "32px",
                  },
                  button: {
                    minHeight: 50,
                    alignItems: isSmallScreen ? "center" : "left",
                    justifyContent: isSmallScreen ? "center" : "left",
                    "@media (max-width: 899px)": {
                      width: "57px",
                    },
                  },
                }}
              >
                <StyledTab
                  value="analytics"
                  label={!isSmallScreen && "Analíticas"}
                  icon={<Leaderboard />}
                  iconPosition="start"
                />
                <StyledTab
                  value="sales"
                  label={!isSmallScreen && "Ventas"}
                  icon={<AttachMoney />}
                  iconPosition="start"
                />
                <StyledTab
                  value="refunds"
                  label={!isSmallScreen && "Devoluciones"}
                  icon={<Loop />}
                  iconPosition="start"
                />
                <StyledTab
                  value="orders"
                  label={!isSmallScreen && "Pedidos"}
                  icon={<LocalShipping />}
                  iconPosition="start"
                />
                <StyledTab
                  value="products"
                  label={!isSmallScreen && "Productos"}
                  icon={<Inventory />}
                  iconPosition="start"
                />

                <StyledTab
                  value="clients"
                  label={!isSmallScreen && "Clientes"}
                  icon={<Groups />}
                  iconPosition="start"
                />
                <StyledTab
                  value="providers"
                  label={!isSmallScreen && "Proveedores"}
                  icon={<Contacts />}
                  iconPosition="start"
                />
                <StyledTab
                  value="help"
                  label={!isSmallScreen && "Ayuda"}
                  icon={<Help />}
                  iconPosition="start"
                />
                <StyledTab
                  value="settings"
                  label={!isSmallScreen && "Configuracion"}
                  icon={<Settings />}
                  iconPosition="start"
                />
              </TabList>
            </Box>
          </TabContext>
        </Box>
      </Box>
      {value === "products" && <Products />}
      {/* {value === "orders" && <Orders />} */}
    </Grid>
  );
};

export default Sidebar;
