import React from 'react';

const Card = (props) => {
  const { imagenSrc, title, description, iconPath1,iconPath2,iconPath3,iconPath4, iconText1,iconText2,iconText3,iconText4} = props;

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
        <div className="more-info-icons">
        <div className="icon">
          <img src={iconPath1}  />
          <span>{props.iconText1}</span>
        </div>
        <div className="icon">
          <img src={iconPath2}  />
          <span>{props.iconText2}</span>
        </div>
        <div className="icon">
          <img src={iconPath3}  />
          <span>{props.iconText3}</span>
        </div>
        <div className="icon">
          <img src={iconPath4} />
          <span>{props.iconText4}</span>
        </div>
</div>
      </ul>
    </nav>
  </div>
  
  );
  }  
export default Card;


