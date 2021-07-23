import React from 'react';
import './intro.css';
import icon from './icon.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Intro = ({titulo}) => {
    return(
        <header>
            <Container>
                <Row>
                    <Col xs={12} sm={4}>
                        <img className="icon" src={icon}></img>
                    </Col>
                    <Col className="texto-intro" xs={12} sm={8}>
                        <h1>{titulo}</h1>
                        <p>Desarrolladora web, docente, estudiante..</p>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Intro;