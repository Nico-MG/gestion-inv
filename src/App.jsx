import React from "react";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme/theme";
import Login from "./components/Organisms/forms/Login";
import OrderDetails from "./components/Organisms/modals/OrderDetails";
import OrderDetailsTest from "./components/Organisms/modals/OrderDetailsTest";

const App = () => {
  return (

    //    <Login/>
    <ThemeProvider theme={lightTheme}>
      <Grid container sx={{ minHeight: "100vh", minWidth: "720px" }}>
        <OrderDetails/>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
