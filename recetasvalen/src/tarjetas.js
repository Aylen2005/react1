import React from 'react';
import './tarjetas.css';

const Card = (props) => {
  const {imagenSrc, title, description, leche,cantidad } = props;

  return (
    <div className="recipe-card">
    <nav>
      <ul className="card-content">
        <li><a href="#"></a></li>
        <div className="card-img">
          <img src={imagenSrc} alt="Receta" />
        </div>
        <div className="card-info">
          <h5 className="card-title">{title}</h5>
          <h1 className="card-text">{description}</h1>
        </div>
        <div className="iconos">
        <div className="ingrediente">
          <img src={leche}  />
          <span>{props.cantidadL}</span>
        </div>
      </div>
      </ul>
    </nav>
  </div>
  
  );
  }  
export default Card;



