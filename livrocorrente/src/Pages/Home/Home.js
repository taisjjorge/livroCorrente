import React from 'react';
import { Container } from 'react-bootstrap';
import  Banner  from '../../Components/Banner';
import Campanha from '../../Components/Campanha';
import BtnCard from '../../Components/BtnCard';
import { Link } from 'react-router-dom';

import './home.css';


function Home() {
    return (
        <React.StrictMode>
            <Banner /> 
            <div className ="cards"> 
                <Link to="/Bibliotecas/Bibliotecas"><BtnCard title='Bibliotecas'/></Link>
                <Link to="https://google.com"><BtnCard title='Voluntários'/></Link>
                <Link to="https://google.com"><BtnCard title='Parceiros'/></Link>
            </div>
            <div className="div-main">
                <Container >
                    <h1 className="titulo-principal">Como eu posso ajudar?</h1>
                    <h3 className="titulo-secundario">Doe um livro a uma biblioteca comunitária!</h3>
                   <Campanha />
                   <hr></hr>
                </Container>
            </div>
        </React.StrictMode>
        );
};

export default Home;
