import React, { useState } from "react";
import "./sidebar.css";
import logo_plus from "../../../images/logo_plus.png";
import i_producto from "../../../images/i_producto.png";
import i_clientes from "../../../images/i_clientes.png";
import i_proveedores from "../../../images/i_proveedores.png";
import i_pedidos from "../../../images/i_pedidos.png";
import i_historial from "../../../images/i_historial.png";
import i_analitica from "../../../images/i_analitica.png";
import i_alerta from "../../../images/i_alerta.png";
import i_devolucion from "../../../images/i_devolucion.png";
import i_informes from "../../../images/i_informes.png";
import i_ayuda from "../../../images/i_ayuda.png";
import i_configuracion from "../../../images/i_configuracion.png";
import Pedidos from "../../../layouts/Pedidos";
import Productos from "../../../layouts/Productos";

const Sidebar = () => {
  const [active, setActive ] = useState("");
  return (
      <>
      <div className="barra-lateral">
      <img src={logo_plus} alt="logo_plus" className="logo" />
      <div className="encabezado-barra-lateral">
        <i className="fas fa-bars"></i> <span>MENÚ</span>
      </div>
      <ul className="menu">
        <li>
            <a href="#" onClick = {() => setActive("Product")}>
            <img src={i_producto} alt="Producto" className="icono" />{" "}
            <span className="texto-opcion"> PRODUCTOS </span>
          </a>
        </li>
        <li>
          <a href="#" onClick = {() => setActive("Client")}>
            <img src={i_clientes} alt="Clientes" className="icono" />{" "}
            <span className="texto-opcion"> CLIENTES </span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={i_proveedores} alt="Proveedores" className="icono" />{" "}
            <span className="texto-opcion"> PROVEEDORES </span>
          </a>
        </li>
        <li>
            <a href="#" onClick={() => setActive("Pedidos")}>
            <img src={i_pedidos} alt="Pedidos" className="icono" />{" "}
            <span className="texto-opcion">PEDIDOS</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={i_historial} alt="Historial" className="icono" />{" "}
            <span className="texto-opcion">HISTORIAL</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={i_analitica} alt="Analista" className="icono" />{" "}
            <span className="texto-opcion">ANALITÍCA</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={i_alerta} alt="Alertas" className="icono" />{" "}
            <span className="texto-opcion">ALERTAS</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={i_devolucion} alt="Devolución" className="icono" />{" "}
            <span className="texto-opcion">DEVOLUCIÓN</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={i_informes} alt="Informes" className="icono" />{" "}
            <span className="texto-opcion">INFORMES</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={i_ayuda} alt="Ayuda" className="icono" />{" "}
            <span className="texto-opcion">AYUDA Y SOPORTE</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={i_configuracion} alt="Configuracion" className="icono" />{" "}
            <span className="texto-opcion">CONFIGURACIÓN</span>
          </a>
        </li>
      </ul>
      </div>
	  {active === "Product" && <Productos/>}
	  {active === "Pedidos" && <Pedidos/>}
	  
      </>
  );
};

export default Sidebar;
