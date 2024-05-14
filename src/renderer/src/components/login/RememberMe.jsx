import './rememberMe.css'

const RememberMe= () => {
    return(
    <div className="checkbox-container">
    <input type="checkbox" id="recordar" name="Recordar" value="0" />
    <label htmlFor="recordar">Recordar usuario</label>
  </div>
  );
}

export default RememberMe;