import React from "react";
// import { ThemeProvider } from "@mui/material/styles";
// import { lightTheme, darkTheme } from "./theme/theme";
import { Box } from "@mui/material";
import Login from "./components/Organisms/Forms/Login";
import Products from "./components/Pages/Products";

const App = () => {
  return (
    <>
      {/* <ThemeProvider theme={lightTheme}> */}
      <Login />
      {/* <Products /> */}
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
