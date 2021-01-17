import React from 'react';
import { Col, Card } from 'react-bootstrap';


import './biblioteca.css';


export default function Biblioteca (props){ 

    return (
      
          <Col md={4}>
            <Card className="card">
              <Card.Img variant="top" src={require(`./img/img-bib.png`).default} />
              <Card.Body>
                <Card.Title>{props.nome_biblioteca}</Card.Title>
                <Card.Text>Rede: {props.nome_rede}</Card.Text>
                <Card.Text>{props.estado_biblioteca}, {props.cidade_biblioteca}</Card.Text>
              </Card.Body>
              <Card.Body>
               <Card.Link href={props.linkRNBC_biblioteca}>Perfil</Card.Link>
               <Card.Link href={props.linkCampanhas_biblioteca}>Campanhas</Card.Link>
             </Card.Body>
            </Card>
          </Col>
    );
}