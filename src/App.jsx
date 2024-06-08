import React from "react";
import { Box, Grid } from "@mui/material";
// import Products from "./components/Pages/Products";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme/theme";
import Login from "./components/Organisms/Forms/Login";
import SideNavbar from "./components/Organisms/SideNavbar";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Grid container sx={{ minHeight: "100vh" }}>
        {/* <Login /> */}
        {/* <Products /> */}
        <SideNavbar />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
