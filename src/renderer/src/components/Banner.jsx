import "../globals.css"
import "./banner.css";
import logo from "../images/logo.png";

const Home = () => {
  return (
    <div className="home">
      <a href="../index.html">
        <img id="logo" src={logo} alt="Logo" />
        <h1 id="nombre-pagina">Productos</h1>
      </a>
    </div>
  );
}

export default Home;
