import React from 'react';
import { Container, Button} from 'react-bootstrap';
import './campanha.css';


export default function Campanha(props){
    return(
  
          <div className="card-campanha">
            <div className="img-campanha">
              <img src={require(`./img/pequenoprincipe.png`).default} className="livro-campanha" alt="Capa Livro" />
            </div>
            <div className="info-campanha">
              <h4>{props.titulo_livro}</h4>
              <p>Exemplares: {props.numeroExemplar_pedido}</p>
              <p>Gênero: {props.genero_livro}</p>
              <p>{props.nome_biblioteca}</p>
              <Button>Doar</Button>
            </div> 
          </div> 
    );
};
