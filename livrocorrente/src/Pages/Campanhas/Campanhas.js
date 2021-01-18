import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderCampanha from '../../Components/HeaderCampanha';
import './campanhas.css';
import Campanha from '../../Components/Campanha';


export default function Campanhas () {

    const campanhas = [

        {
            titulo_livro: 'O pequeno príncipe',
            numeroExemplar_pedido: '2',
            genero_livro: 'Fábula',
            nome_biblioteca: 'Biblioteca comunitária X'
        },

        {
            titulo_livro: 'Malala',
            numeroExemplar_pedido: '1',
            genero_livro: 'Biografia',
            nome_biblioteca: 'Biblioteca comunitária Y'
        },
        {
            titulo_livro: 'O pequeno príncipe',
            numeroExemplar_pedido: '2',
            genero_livro: 'Fábula',
            nome_biblioteca: 'Biblioteca comunitária X'
        },

        {
            titulo_livro: 'Malala',
            numeroExemplar_pedido: '1',
            genero_livro: 'Biografia',
            nome_biblioteca: 'Biblioteca comunitária Y'
        },
    ]
   
    return (
        
        <div className="div-main-campanhas">
            <HeaderCampanha nomeBiblioteca="Biblioteca X"/>

            <h1 className="titulo-principal">Confira todas as campanhas abertas por esta biblioteca:</h1>
            <h3 className="titulo-secundario">Contribua com uma biblioteca comunitária!</h3>

            <Container className="div-campanhas">
                {campanhas.map(campanha =>{
                    return(
                        <Campanha titulo_livro={campanha.titulo_livro} numeroExemplar_pedido={campanha.numeroExemplar_pedido} 
                        genero_livro={campanha.genero_livro} nome_biblioteca={campanha.nome_biblioteca} />
                    )
                })}
            </Container>
        </div>
        
    )
}
