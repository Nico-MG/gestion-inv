import React from "react";
import "../globals.css";
import "./sidebar.css";
import proveedores from "../images/proveedores.png";
import ventas from "../images/ventas.png";
import productos from "../images/productos.png";
import pedidos from "../images/pedidos.png";

const Sidebar = () => {
  return (
    <div className="container-menu">
      <div className="cont-menu">
        <nav>
          <div id="contenedor-button">
            <a id="proveedores" href="#">
              <img src={proveedores} />
              <h1>Proveedores</h1>
            </a>
            <a id="ventas" href="#">
              <img src={ventas} />
              <h1>Ventas</h1>
            </a>
            <a id="productos" href="#">
              <img src={productos} />
              <h1>Productos</h1>
            </a>
            <a id="pedidos" href="#">
              <img src={pedidos} />
              <h1>Pedidos</h1>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
