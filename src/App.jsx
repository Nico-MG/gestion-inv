import React from "react";
import { Box } from "@mui/material";
import Login from "./components/Organisms/Forms/Login/Login";
import MockupOrder from "./components/Organisms/Forms/Order/MockupOrder"
import Sidebar from "./components/Organisms/Menus/Sidebar";

const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "80vh",
      }}
    >
      {/* <Login /> */}
      <Sidebar />
    </Box>
  );
};

export default App;
