import React from 'react';
import { Container, Button, Row, Col, Card, Image} from 'react-bootstrap';
import './campanha.css';


// export default function Campanha(){
//     return(
  
//         <div className="div-campanha">
//           <div className="card-campanha">
//               <img src={require(`./img/pequenoprincipe.png`).default} className="livro-campanha" alt="Capa Livro" />
//               <div className="info-campanha">
//                 <h4>O pequeno príncipe</h4>
//                 <p>2 exemplares</p>
//                 <p>Biblioteca comunitária X</p>
//                 <Button>Doar</Button>
//               </div> 
//           </div> 
//           <div className="card-campanha">
//               <img src={require(`./img/pequenoprincipe.png`).default} className="livro-campanha" alt="Capa Livro" />
//               <div className="info-campanha">
//                 <h4>O pequeno príncipe</h4>
//                 <p>2 exemplares</p>
//                 <p>Biblioteca comunitária X</p>
//                 <Button>Doar</Button>
//               </div>
//           </div>
//           <div className="card-campanha">
//               <img src={require(`./img/pequenoprincipe.png`).default} className="livro-campanha" alt="Capa Livro" />
//               <div className="info-campanha">
//                 <h4>O pequeno príncipe</h4>
//                 <p>2 exemplares</p>
//                 <p>Biblioteca comunitária X</p>
//                 <Button>Doar</Button>
//               </div>
//           </div> 
//           <div className="card-campanha">
//               <img src={require(`./img/pequenoprincipe.png`).default} className="livro-campanha" alt="Capa Livro" />
//               <div className="info-campanha">
//                 <h4>O pequeno príncipe</h4>
//                 <p>2 exemplares</p>
//                 <p>Biblioteca comunitária X</p>
//                 <Button>Doar</Button>
//               </div>
//           </div> 
//         </div>

//     );
// };

export default function Campanha(){
  return(

      <Container className="div-campanha">
        <Row className="row-campanha">
          <Col sm={5} className="card-campanha"> {/*Faz com que a coluna fique responsiva, sem precisar estizar com flex via css*/}
            <div className=" teste conteudo-campanha">
              <img src={require(`./img/pequenoprincipe.png`).default} className="livro-campanha" alt="Capa Livro" />
              <div className="info-campanha">
                <h4>O pequeno príncipe</h4>
                <p>2 exemplares</p>
                <p>Biblioteca comunitária X</p>
                <Button>Doar</Button>
              </div>
            </div>
          </Col>

          <Col sm={5} className="card-campanha"> {/*Faz com que a coluna fique responsiva, sem precisar estizar com flex via css*/}
            <Card className="conteudo-campanha">
              <Image src={require(`./img/pequenoprincipe.png`).default}  rounded fluid className="mx-auto livro-campanha" alt="Capa Livro" />
              <Card.Body className="info-campanha">
                <Card.Title>O paaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaequeno príncipe</Card.Title>
                <Card.Text>2 exemplares</Card.Text>
                <Card.Text>Biblioteca comunitária X</Card.Text>
                <Button>Doar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row> 
      </Container>

  );
};