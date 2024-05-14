import './lefPanel.css';

const LeftPanel = () => {
    return(
    <div className="izquierda">
        <div className="sobra-azul"></div>
        <img src={require('../../images/logo.png')} alt="Imagen" />
    </div>
  );
}

export default LeftPanel;