import React from 'react';
import './Car.css';

export default par => (  

  <div className="Auto">
    <h2>Автомобиль {par.name}</h2>
    <h1>Год {par.god}</h1>
    <h3>цена {par.prise}</h3>
    <a href={par.link} target="_blank">
      <img src={par.img} />
    </a>
    <p>{par.children}</p>    
    <button onClick={par.onChengeT}>О машине</button>
    <button onClick={par.onChengeG}>Год</button>
    <p></p>
  </div>
)
