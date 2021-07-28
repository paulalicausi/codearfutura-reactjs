import React from 'react';
import Col from 'react-bootstrap/Col';

const Personaje = ({index, personaje}) => {
    return(
        <Col sm={4} key={index}>
            <img style={{width: "100%"}} src={personaje.image}></img>
            <h3>{personaje.name}</h3>
            <p>{personaje.house}</p>
        </Col>
    );
}

export default Personaje;