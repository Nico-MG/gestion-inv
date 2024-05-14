import React from "react";
import Sidebar from "./components/SideBar";
import Login from "./components/Login";
import OrderForm from "./components/OrderForm";
import Pedidos from "./layouts/Pedidos";
import Productos from "./layouts/Productos";

const App = () => {
  return (
    <>
      {/* <Pedidos /> */}
      <Productos />
      <Sidebar />
    </>
  );
};

export default App;
