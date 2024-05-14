/*LOGIN ver. 0.2*/

import "./login.css";
import logo_plus from "../images/logo_plus.png";

const Login = () => {
  return (
    <div className="container">
      <div className="sombra-azul"></div>
      <div className="izquierda">
        {/*<h1>ERP</h1>*/}
        <img src={logo_plus} />
      </div>
      <div className="derecha">
        <h3>¡BIENVENIDO!</h3>
        <h4>Accede a tu cuenta</h4>
        <form action="#" method="post">
          <input type="text" placeholder="Usuario" name="usuario" required />
          <input
            type="password"
            placeholder="Contraseña"
            name="contraseña"
            required
          />
          <div className="checkbox-container">
            <input type="checkbox" id="recordar" name="Recordar" value="0" />
            <label htmlFor="recordar">Recordar usuario</label>
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
