import "./contenido.css";

const baseURL = "https://gestion-inv-api.onrender.com/api/producto";

//  fetch(`${baseURL}/${id}

const response = await fetch(`${baseURL}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});

const data = await response.json();
console.log(data);

function Contenido() {
  return (
    <div className="tabla-datos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Stock</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.categoria}</td>
                <td>{item.stock}</td>
                <td>{item.precio}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contenido;
