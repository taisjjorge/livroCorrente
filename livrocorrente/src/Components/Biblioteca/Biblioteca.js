import React from 'react';
import { Col, Card } from 'react-bootstrap';


import './biblioteca.css';


export default function Biblioteca (props){ 

    // return(
    //       <div className="card">
    //       <Card style={{ width: '18rem' }}>
    //         <Card.Img variant="top" src={require(`./img/img-bib.png`).default} />
    //         <Card.Body>
    //           <Card.Title>{props.title}</Card.Title>
    //           <Card.Text>
    //             {props.description}
    //           </Card.Text>
    //         </Card.Body>
    //         <Card.Body>
    //           <Card.Link href={props.link}>Perfil</Card.Link>
    //           <Card.Link href="#">Campanhas</Card.Link>
    //         </Card.Body>
    //       </Card>



    //        <div className="card-biblioteca"> 
    //           <img src={require(`./img/pequenoprincipe.png`).default} className="livro-campanha" alt="Capa Livro" />
    //           <div className="info-biblioteca">
    //             <h3>{props.title}</h3>
    //             <p>{props.description}</p>
    //             <a href={props.link}>Perfil</a>                
    //             <a href={props.link}>Campanhas</a> 
    //           </div> 
    //       </div> 
    //       </div>
    // )

    return (
      
          <Col md={4}>
            <Card className="card">
              <Card.Img variant="top" src={require(`./img/img-bib.png`).default} />
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
              </Card.Body>
              <Card.Body>
               <Card.Link href={props.link}>Perfil</Card.Link>
               <Card.Link href="#">Campanhas</Card.Link>
             </Card.Body>
            </Card>
          </Col>
     
        
        
    );
}