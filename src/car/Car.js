import React, { useState, useEffect } from 'react';
import './Car.css';

export default function Car(props) {
  const [beepeando, setBeppeando] = useState(false);

  const estiloDivCardContenedor = {
    padding: '0px 16px 16px',
  };

  const hacerBeep = (sonido) => {
    setBeppeando(!beepeando);
  };

  return (
    <div style={props.style}>
      {beepeando && <div className="bubble b r hb">{props.sonido}</div>}

      <div className="estiloDivCard">
        <img
          className="estiloImgCard"
          src={props.imagen}
          alt="Imagen del carro"
        />
        <div style={estiloDivCardContenedor}>
          <h2>{props.nombre}</h2>
          <p>
            <b>Descripción:</b> {props.descripcion}
          </p>
          <em>
            <b>Modelo:</b> {props.modelo}
          </em>
          <br />
          {props.anio > 1970 && (
            <img
              src="https://th.bing.com/th/id/OIP.WXdPD82PkowarOJ3MlkOVAHaB0?pid=ImgDet&rs=1"
              width="32"
              alt="Insignia"
            />
            
          )}
          <br />
          {props.anio <1970 && (
            <img
              src="https://th.bing.com/th/id/R.c476f1518c4c0aaf5b226de55d9a2dcd?rik=OD91QyTEa64b2A&pid=ImgRaw&r=0"
              width="32"
              alt="Insignia "
            />
            
          )}
          <br />
          <br />
          <button onClick={() => hacerBeep(props.sonido)}>
            HACER SONAR EL CLAXON
          </button>
        </div>
      </div>
    </div>
  );
}
