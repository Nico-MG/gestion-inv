import React from "react";
import { Box, Grid } from "@mui/material";
// import Products from "./components/Pages/Products";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme/theme";
import Login from "./components/Organisms/Forms/Login";
import SideNavbar from "./components/Organisms/SideNavbar";
import Table from "./components/Organisms/Table";
import Products from "./components/Pages/Products";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Grid container spacing={2} sx={{ minHeight: "100vh", minWidth: "720px" }}>
        {/* <Login /> */}
        {/* <Products /> */}
        <SideNavbar />
        <Products />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
