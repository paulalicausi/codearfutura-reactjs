import React, { useEffect, useState } from 'react';
import './contacto.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Personaje from '../personaje/personaje';

const Contacto = () => {
    const [personajes, setPersonajes] = useState();

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
                {personajes ? 
                <Row>
                    {personajes.map((item, i) => 
                        <Personaje index={i} personaje={item} />
                    )}
                </Row>
                : <div>Cargando personajes...</div>}
            </Container>
        </div>
    );
}

export default Contacto;