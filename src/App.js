import React, { useState, useEffect } from 'react';
import './style.css';
import Car from './car/Car.js';

export default function App() {
  const personajesDesdeAPI = [
    {
      nombre: 'Volkswagen ',
      modelo: 'Volkswagen 1968',
      imagen:
        'https://th.bing.com/th/id/OIP.UszQqL5luSi7kDP-PedKQQHaHa?pid=ImgDet&rs=1',
      descripcion:
        'El Volkswagen "Tipo 1" es un popular automóvil del segmento A producido por el fabricante alemán Volkswagen desde 1938 hasta 2003, convirtiéndose en uno de los automóviles más populares',
      sonido: 'PRU pru tututututu',
      anio: '1968',
    },
    {
      nombre: 'Audi ',
      modelo: 'Audi RS7',
      imagen:
        'https://th.bing.com/th/id/OIP._4100e88PPI6WaDZTLFFAQHaEl?pid=ImgDet&rs=1',
      descripcion:
        'Y sentir el empuje del Audi RS 7 Sportback y su motor V8 4.0 TFSI con 441 kW (600 CV) generando 800 Nm de par entre las 2.050 y las 4.500 rpm es todo un multiplicador de emociones. Con una velocidad máxima limitada electrónicamente a 250 km/h, puede llegar a 280 km/h con el paquete dynamic.',
      sonido: 'rutututututut tutuut tututu',
      anio: '2023',
    },
  ];

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    setPersonajes(personajesDesdeAPI);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {personajes.map((personaje) => (
        <Car
          nombre={personaje.nombre}
          modelo={personaje.modelo}
          imagen={personaje.imagen}
          descripcion={personaje.descripcion}
          sonido={personaje.sonido}
          anio={personaje.anio}
        />
      ))}
    </div>
  );
}
