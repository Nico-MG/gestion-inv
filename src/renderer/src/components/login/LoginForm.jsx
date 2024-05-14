import './loginForm.css'
import './buttonEntrar.css'
import RememberMe from './RememberMe'


const LoginForm= () => {
    return (
      <form action="#" method="post">
        <input type="text" 
        placeholder="Usuario" 
        name="usuario" required />
        <input type="password" 
        placeholder="Contraseña" 
        name="contraseña" required />
        <RememberMe/>
        <button type="submit">Ingresar</button>
      </form>
    );
  }

export default LoginForm;