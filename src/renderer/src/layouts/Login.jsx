import { Link } from 'react-router-dom'

function Login () {
  return (
    <div>
      <h1>Esta es la página de inicio</h1>
      <Link to='/Clientes'>Haz clic para ver la página sobre nosotros</Link>
    </div>
  )
}

export default Login
