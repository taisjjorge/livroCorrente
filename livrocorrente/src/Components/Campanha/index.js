import React from 'react';
import { Container, Button, Row, Col} from 'react-bootstrap';
import './campanha.css';


export default function Campanha(){
    return(
  
        <div className="div-campanha">
          <div className="card-campanha">
              <img src={require(`./img/pequenoprincipe.png`).default} className="livro-campanha" alt="Capa Livro" />
              <div className="info-campanha">
                <h4>O pequeno príncipe</h4>
                <p>2 exemplares</p>
                <p>Biblioteca comunitária X</p>
                <Button>Doar</Button>
              </div> 
          </div> 
          <div className="card-campanha">
              <img src={require(`./img/pequenoprincipe.png`).default} className="livro-campanha" alt="Capa Livro" />
              <div className="info-campanha">
                <h4>O pequeno príncipe</h4>
                <p>2 exemplares</p>
                <p>Biblioteca comunitária X</p>
                <Button>Doar</Button>
              </div>
          </div>
        </div>

    );
};

// export default function Campanha(){
//   return(

//       <Container className="div-campanha">
//         <Row className="row-campanha">
//           <Col sm={5} className="card-campanha"> {/*Faz com que a coluna fique responsiva, sem precisar estizar com flex via css*/}
//             <div className="conteudo-campanha">
//               <img src={require(`./img/pequenoprincipe.png`).default} className="livro-campanha" alt="Capa Livro" />
//               <div className="info-campanha">
//                 <h4>O pequeno príncipe</h4>
//                 <p>2 exemplares</p>
//                 <p>Biblioteca comunitária X</p>
//                 <Button>Doar</Button>
//               </div>
//             </div>
//           </Col>

//           <Col sm={5} className="card-campanha"> {/*Faz com que a coluna fique responsiva, sem precisar estizar com flex via css*/}
//             <div className="conteudo-campanha">
//               <img src={require(`./img/pequenoprincipe.png`).default} className="livro-campanha" alt="Capa Livro" />
//               <div className="info-campanha">
//                 <h4>O pequeno príncipe</h4>
//                 <p>2 exemplares</p>
//                 <p>Biblioteca comunitária X</p>
//                 <Button>Doar</Button>
//               </div>
//             </div>
//           </Col>
//         </Row> 
//       </Container>

//   );
// };