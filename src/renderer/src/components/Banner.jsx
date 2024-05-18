import "../globals.css"
import "./banner.css";
import logo from "../images/logo.png";

const Banner = ({ page }) => {
  return (
    <div className="home">
      <a href="../index.html">
        <img id="logo" src={logo} alt="Logo" />
        <h1 id="nombre-pagina">{page}</h1>
      </a>
    </div>
  );
}

export default Banner;
