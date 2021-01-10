import React from 'react';
import { Container, Row } from 'react-bootstrap';
import HeaderPagina from '../../Components/HeaderPagina';
import Biblioteca from '../../Components/Biblioteca/Biblioteca';



import './bibliotecas.css';

export default function Bibliotecas() {


  //Array simulando um Json vindo do BD
  const bibliotecas = [
    {
        id: 1,
        title: 'Casa Azul',
        description: 'Biblioteca comunitária. Integrante de Mar de Leitores - RJ',
        link: 'https://rnbc.org.br/biblioteca/casa-azul/',
    },

    {
        id: 2,
        title: 'Biblioteca comunitária Y',
        description: 'Lorem ipsum .....',
        link: 'https://google.com'
    },

    {
      id: 2,
      title: 'Biblioteca comunitária Z',
      description: 'Lorem ipsum .....',
      link: 'https://google.com'
  },

  {
    id: 2,
    title: 'Biblioteca comunitária Z',
    description: 'Lorem ipsum .....',
    link: 'https://google.com'
  },
   
  ]

    return (
      <>
        <HeaderPagina titleCategoria='Bibliotecas cadastradas' />
        
        <Container fluid className="div-main-bibliotecas">
          <Container>
          {/* Utilizando função map para puxar os dados do array bibliotecas a partir das props passadas no componente Biblioteca */}
          <Row>
          {bibliotecas.map(biblioteca => {
            return (
                  <Biblioteca title={biblioteca.title} description={biblioteca.description} link={biblioteca.link} />
            )
          })}
          </Row>
          </Container>
        </Container>
      
      </>
       
        );
};

