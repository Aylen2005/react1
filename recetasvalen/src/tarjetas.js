
import './tarjetas.css';

const Card = (props) => {
  const {imagenSrc, title, description, leche,cantidadL, huevo, cantidadH, azucar, cantidadA , arroz, cantidadAr} = props;

  return (
    <div className="recipe-card">
    <nav>
      <ul className="card-content">
        <div className="card-img">
          <img src={imagenSrc} alt="Receta" />
        </div>
        <div className="card-info">
          <h5 className="card-title">{title}</h5>
          <h1 className="card-text">{description}</h1>
        </div>
        <div className="iconos">
        <div className="ingredientes">
          <img src={leche}  />
          <span>{props.cantidadL}</span>
          </div>
          <div className="ingredientes">
          <img src={huevo}  />
          <span>{props.cantidadH}</span>
        </div>
        <div className="ingredientes">
          <img src={azucar}  />
          <span>{props.cantidadA}</span>
        </div>
        <div className="ingredientes">
          <img src={arroz}  />
          <span>{props.cantidadAr}</span>
        </div>
      </div>
      </ul>
    </nav>
  </div>
  );
  }  
export default Card;



