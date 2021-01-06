import React from 'react';
import { Container, Button} from 'react-bootstrap';
import './campanha.css';


export default function Campanha(){
    return(
  
        <Container className="div-campanha">
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
        </Container>

    );
};
