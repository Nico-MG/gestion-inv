/*LOGIN ver. 0.2*/
import "./login.css";
import logo_plus from "../images/logo_plus.png";
import { ApiUsers } from "../services/apiService";
import { useState } from "react";



const Login = () => {
  
  const [credentials,setCredentials] = useState({
    rut: "",
    password: ""
  })     
  
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
      })

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{

      const token = await ApiUsers.logUsers(credentials);
      //credentials -> {rut, password}

    } catch (error){
        console.error("Error al setear datos");
    }

  }


  return (
    <div className="container">
      <div className="sombra-azul"></div>
     
      <div className="izquierda">
        <img src={logo_plus} />
      </div>
     
      <div className="derecha">
        <h3>¡BIENVENIDO!</h3>
        <h4>Accede a tu cuenta</h4>
        <form onSubmit={handleSubmit}>
          
          <input 
            name="rut" 
            type="text" 
            placeholder="RUT" 
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Contrasena"
            onChange={handleChange}
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
