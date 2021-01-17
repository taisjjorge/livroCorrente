import React from 'react';
import { Container, Row } from 'react-bootstrap';
import HeaderPagina from '../../Components/HeaderPagina';
import Biblioteca from '../../Components/Biblioteca/Biblioteca';



import './bibliotecas.css';

export default function Bibliotecas() {


  //Array simulando um Json vindo do BD
  const bibliotecas = [

    
    {
      nome_biblioteca: 'Biblioteca comunitária X',
      nome_rede: 'Rede bibliotecas X',
      estado_biblioteca: "Rio de Janeiro",
      cidade_biblioteca: "RJ",
      linkRNBC_biblioteca: 'https://rnbc.org.br/biblioteca/casa-azul/',
      
    },

    {
      nome_biblioteca: 'Biblioteca comunitária Y',
      nome_rede: 'Rede bibliotecas Y',
      estado_biblioteca: "Rio de Janeiro",
      cidade_biblioteca: "RJ",
      linkRNBC_biblioteca: 'https://rnbc.org.br/biblioteca/casa-azul/',
      linkCampanhas_biblioteca: 'https://rnbc.org.br/biblioteca/casa-azul/'
    },

    {
      
      nome_biblioteca: 'Biblioteca comunitária Z',
      nome_rede: 'Rede bibliotecas Z',
      estado_biblioteca: "Rio de Janeiro",
      cidade_biblioteca: "RJ",
      linkRNBC_biblioteca: 'https://rnbc.org.br/biblioteca/casa-azul/',
      linkCampanhas_biblioteca: 'https://rnbc.org.br/biblioteca/casa-azul/'

  },

  {
    nome_biblioteca: 'Biblioteca comunitária X',
    nome_rede: 'Rede bibliotecas X',
    estado_biblioteca: "Rio de Janeiro",
    cidade_biblioteca: "RJ",
    linkRNBC_biblioteca: 'https://rnbc.org.br/biblioteca/casa-azul/',
    linkCampanhas_biblioteca: 'https://rnbc.org.br/biblioteca/casa-azul/'
  },

  {
    nome_biblioteca: 'Biblioteca comunitária Y',
    nome_rede: 'Rede bibliotecas Y',
    estado_biblioteca: "Rio de Janeiro",
    cidade_biblioteca: "RJ",
    linkRNBC_biblioteca: 'https://rnbc.org.br/biblioteca/casa-azul/',
    linkCampanhas_biblioteca: ''
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
                  <Biblioteca nome_biblioteca={biblioteca.nome_biblioteca} nome_rede={biblioteca.nome_rede} 
                  estado_biblioteca={biblioteca.estado_biblioteca} cidade_biblioteca={biblioteca.cidade_biblioteca} linkRNBC_biblioteca={biblioteca.linkRNBC_biblioteca}
                   linkCampanhas_biblioteca={biblioteca.linkCampanhas_biblioteca}/>
            )
          })}
          </Row>
          </Container>
        </Container>
      
      </>
       
        );
};

