import React from 'react';
import { Container, Figure } from 'react-bootstrap';
import HeaderPagina from '../../Components/HeaderPagina';
import './quemSomos.css';

export default function QuemSomos () {

   
    return (
        <React.StrictMode>
            <HeaderPagina className='teste' titleCategoria='Quem somos'/>
            <Container fluid className='div-main-quemSomos'>
            {/* Imagem */}
                <div className="img-leitura">
                    <Figure>
                        <Figure.Image alt="Imagem leitura" src={require(`./img/leitura.png`).default} />
                        <Figure.Caption className="img-credito">
                            Illustration by <a href="undefined">Natasha Remarchuk</a> from <a href="https://icons8.com/">Icons8</a>
                        </Figure.Caption>
                    </Figure>
                </div>
            {/* Sobre nós */}
                <div className="inf-quemSomos-parent">
                    <div className="inf-quemSomos">
                        <h1>Missão</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                    </div>
                    <div className="inf-quemSomos">
                        <h1>Valores</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                    </div>
                </div>
            </Container>
            {/* Livros doados */}
            <Container fluid className="indicadores">
                  
            </Container>
        </React.StrictMode>    
    )
}