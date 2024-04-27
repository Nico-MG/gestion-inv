import "./formularioVentas.css"

function FormularioVentas({estado}) {
  if (estado){
    return (
      <div class="formulario">
        <div class="titulo">
          <h1>REGISTRO DE PRODUCTOS</h1>
        </div>
        <div class="contenido">
          <form class="contenido-detalle">
            <div className="detalle">
              <label htmlFor="id-producto">ID del producto:</label>
              <input type="text" id="id-producto" name="id-producto"/><br></br>
            </div>
            <div className="detalle">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre"/><br></br>
            </div>
            <div className="detalle">
              <label htmlFor="categoria">Categoria:</label>
              <input type="text" id="categoria" name="categoria"/><br></br>
            </div>
            <div className="detalle">
              <label htmlFor="stock">Stock:</label>
              <input type="text" id="stock" name="stock"/><br></br>
            </div>
            <div className="detalle">
              <label htmlFor="precio">Precio:</label>
              <input type="text" id="precio" name="precio"/><br></br>
            </div>
            <div className="opciones">
              <button>Cancelar</button>
              <button>Guardar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default FormularioVentas