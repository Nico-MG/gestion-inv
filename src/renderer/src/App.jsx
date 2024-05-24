import React from "react";
import Sidebar from "./components/Organisms/Menus/Sidebar";
import Productos from "./layouts/Productos";
import Pedidos from "./layouts/Pedidos";
import Login from "./components/Organisms/Forms/Login/Login";
import AddButton from "./components/Molecules/TableButtons/Add/AddButton";

const App = () => {
  return (
    <>
      <Pedidos />
    </>
  );
};

export default App;
