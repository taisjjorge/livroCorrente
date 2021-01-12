import './footer.css';

export default function Footer (){
    return (
    <div>
    <div className="container-footer">
    <h6 className="logo">LivroCorrente</h6>

        <div className="info-inicio">
        <h6 className="title">INÍCIO</h6>
            <a className="item-footer" href="#">Quem Somos</a>
            <a className="item-footer" href="#">Pontos de Coleta</a>
            <a className="item-footer" href="#">Bibliotecas</a>
        </div>

        <div className="suporte">
        <h6 className="title">SUPORTE</h6>
            <a className="item-footer" href="#">Voluntários</a>
            <a className="item-footer" href="#">Parceiros</a>
            <a className="item-footer" href="#">FAQ</a>
        </div>

        <div className="socialmedia">
            <h6 className="title">NOSSAS REDES SOCIAIS</h6>
            <a className="redes-sociais" href="#">
                <img src="./img/facebook.png" />
            </a>
            <a className="redes-sociais" href="#">
                <img src="./img/instagram.png" />
            </a>
            <a className="redes-sociais" href="#">
                <img src="./img/twitter.png" />
            </a>

        </div>  
  </div>

  <p className="copyright">© Copyright 2021 Livro Corrente, Inc. 
        Todos os direitos reservados. As diversas marcas comerciais 
        pertencem a seus respectivos proprietários
    </p>
    
  </div>
    );
}