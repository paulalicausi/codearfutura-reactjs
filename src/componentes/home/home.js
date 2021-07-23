import React from 'react';
import './home.css';
import Intro from '../intro/intro';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className="home">
            <Intro titulo="Paula Licausi" />
            <Link to="/contacto">Ir a contacto!</Link>
        </div>
    );
}

export default Home;