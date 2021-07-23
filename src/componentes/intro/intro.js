import React from 'react';
import './intro.css';
import icon from './icon.png';

const Intro = ({titulo}) => {
    return(
        <div>
            <h1>{titulo}</h1>
            <img src={icon} className="icon" alt="Foto de Paula Licausi"></img>
            <p>Descripcion/Presentación/etc</p>
        </div>
    );
}

export default Intro;