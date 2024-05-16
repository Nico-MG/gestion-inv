import "./panel.css"
import logo from "../images/logo.png"
import notificacion from "../images/icons/notificacion.png"
import salir from "../images/icons/salir.png"

import productos from "../images/icons/productos.png"
import cliente from "../images/icons/cliente.png"
import proveedores from "../images/icons/proveedores.png"

import devolucion from "../images/icons/devolucion.png"
import pedidos from "../images/icons/pedidos.png"
import ventas from "../images/icons/ventas.png"

import informe from "../images/icons/informe.png"
import historial_compras from "../images/icons/historial_compras.png"
import alerta from "../images/icons/alerta.png"


const Panel = () => {
    return (
        <>

        <img class="img-border" src={notificacion} style={{height:50, width:50}}/>          

        <div class="contenedor">
                <div class="contenedor-sup">
                    <img class="id" src={logo} width="50" height="50"/>
                    <h1>Menú Principal</h1>
               </div>
        </div>  
        
        <div class="contenedor-botones">
   
            <button>
                <div class="contenido-boton">
                    <img src={productos} />
                    <h1>Registro de producto</h1>
                </div>
            </button>

            <button>
                <div class="contenido-boton">
                    <img src={cliente}/>
                    <h1>Lista de clientes</h1>
                </div>
            </button>

            <button>
                <div class="contenido-boton">
                    <img src={proveedores}/>
                    <h1>Lista de proveedores</h1>
                </div>
            </button>    


            <button>
                <div class="contenido-boton">
                    <img src={pedidos}/>
                    <h1>Gestion de pedidos</h1>
                </div>
            </button>

            <button>
                <div class="contenido-boton">
                <img src={ventas}/>
                <h1>Historial de ventas</h1>
                </div>
            </button>

            <button>
                <div class="contenido-boton">
                <img src={historial_compras}/>
                <h1>Historial de compras</h1>
                </div>
            </button>

            <button>
                <div class="contenido-boton">
                <img src={devolucion}/>
                <h1>Devolucion</h1>
                </div>
            </button>

            <button>
                <div class="contenido-boton">
                <img src={informe}/>
                <h1>Generar informe</h1>
                </div>
            </button>

            <button>
                <div class="contenido-boton">
                <img src={alerta}/>
                <h1>Reportar error</h1>
                </div>
            </button>

        </div>    

        <img class="img-border" src={salir} style={{height:50, width:50}}/>

        </>
    )
}

export default Panel