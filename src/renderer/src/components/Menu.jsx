import "./menu.css";

function Menu() {
  return (
    <div className="container-menu">
      <div className="cont-menu">
        <nav>
          <div id="contenedor-button">
            <a id="proveedores" href="#">
              <img src="/panel_principal/icons/cliente.png" />
              <h1>Proveedores</h1>
            </a>
            <a id="ventas" href="#">
              <img src="/panel_principal/icons/ventas.png" />
              <h1>Ventas</h1>
            </a>
            <a id="productos" href="#">
              <img src="/panel_principal/icons/productos.png" />
              <h1>Productos</h1>
            </a>
            <a id="pedidos" href="#">
              <img src="/panel_principal/icons/pedidos.png" />
              <h1>Pedidos</h1>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
