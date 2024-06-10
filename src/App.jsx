import React from "react";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme/theme";
import Login from "./components/Organisms/forms/Login";
import Mockup_OrderForm from "./components/organisms/forms/MockupOrderV3";
import MockupOrderV2 from "./components/organisms/forms/MockupOrderV2";
import ProductForm from "./components/organisms/forms/ProductForm";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Grid container sx={{ minHeight: "100vh", minWidth: "720px" }}>
        {/* <Login /> */}
        <Mockup_OrderForm />
        {/* <MockupOrderV2 /> */}
        {/* <ProductForm /> */}
      </Grid>
    </ThemeProvider>
  );
};

export default App;
