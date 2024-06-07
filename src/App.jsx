import React from "react";
import { Box } from "@mui/material";
// import Products from "./components/Pages/Products";
// import { ThemeProvider } from "@mui/material/styles";
// import { lightTheme, darkTheme } from "./theme/theme";
import Login from "./components/Organisms/Forms/Login";
// import SideNavbar from "./components/Organisms/SideNavbar";

const App = () => {
  return (
    <>
      {/* <ThemeProvider theme={lightTheme}> */}
      <Login />
      {/* <Products /> */}
      {/* </ThemeProvider> */}
      {/* <SideNavbar /> */}
    </>
  );
};

export default App;
