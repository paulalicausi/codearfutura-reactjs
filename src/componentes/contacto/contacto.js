import React, { useEffect, useState } from 'react';
import './contacto.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contacto = () => {
    const [personajes, setPersonajes] = useState([]);

     useEffect(() => 
        fetch('https://hp-api.herokuapp.com/api/characters')
        .then(response => 
            response.json()
        )
        .then(personajes => 
            setPersonajes(personajes)
        )
     );

    return(
        <div>
            <Container>
                <Row>
                    {personajes.map((personaje, index) => 
                    <Col sm={4} key={index}>
                        <img style={{width: "100%"}} src={personaje.image}></img>
                        <h3>{personaje.name}</h3>
                        <p>{personaje.house}</p>
                    </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default Contacto;