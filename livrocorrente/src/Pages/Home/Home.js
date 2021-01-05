import React from 'react';
import { Container } from 'react-bootstrap';
import  Banner  from '../../Components/Banner';
import Cards from '../../Components/Cards';
import Campanha from '../../Components/Campanha';
import BtnCard from '../../Components/BtnCard';

import './home.css';


function Home() {
    return (
        <React.StrictMode>
            <Banner /> 
            <div className ="cards"> 
                <BtnCard title='Bibliotecas'/>
                <BtnCard title='Voluntários'/>
                <BtnCard title='Parceiros'/>
            </div>
            <div className="div-main">
                <Container className="container-main">
                    <h1 className="titulo-principal">Como eu posso ajudar?</h1>
                    <h3 className="titulo-secundario">Doe um livro a uma biblioteca comunitária!</h3>
                   <Campanha />
                </Container>
            </div>
        </React.StrictMode>
        );
};

export default Home;
