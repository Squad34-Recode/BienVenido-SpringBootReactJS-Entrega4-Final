import React from "react";
import { Link } from 'react-router-dom';

const CardWork = (props) => {
  const { imgWork, altWork, h3Work, pWork, linkWork } = props;
  return (
    <div className="box">
      <div className="image">
        <img src={imgWork} alt={altWork} />
      </div>
      <div className="content">
        <h3>{h3Work}</h3>
        <p>
          {pWork}
        </p>
        <Link to={linkWork} target="_blank" className="btn">visita la página web</Link>
        <div className="icons">
        </div>
      </div>
    </div>
  )
}

export default CardWork;