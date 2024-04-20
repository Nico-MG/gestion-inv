import Login from './layouts/Login'
import Clientes from './layouts/Clientes'
import { Router, Route } from 'electron-router-dom'

function App () {
  return (
    <>
      <h1>Hola mundo</h1>
      <Router>
        <Route path='/' Component={<Login/>} />
        <Route path='/Clientes' Component={<Clientes/>} />
      </Router>
    </>
  )
}

export default App
