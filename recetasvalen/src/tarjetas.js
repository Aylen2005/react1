import React from 'react';

const Card = (props) => {
  const {imagenSrc, title, description} = props;

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
          <p className="card-text">{description}</p>
        </div>
      </ul>
    </nav>
  </div>
  
  );
  }  
export default Card;



