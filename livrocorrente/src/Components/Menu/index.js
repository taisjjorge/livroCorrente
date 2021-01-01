import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './menu.css';



function BaseMenu(props) {
    const { location }  = props
    return (

   
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand  as={Link} to="/" href="/Home">
                <img
                    src="https://i.imgur.com/FtVCm1o.png"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} className="mr-auto">
                    <Nav.Link className="nav-link" as={Link} to="/Bibliotecas/Bibliotecas" href="/Bibliotecas/Bibliotecas">Bibliotecas</Nav.Link>
                    {/* <NavDropdown className="nav-link" title="Pontos de coleta" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Niterói</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Rio de Janeiro</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Região dos Lagos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/PontosColeta" href="/PontosColeta">Todos</NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link className="nav-link" as={Link} to="/Contato" href="/Contato">Quem somos</Nav.Link>
                    <Nav.Link className="nav-link" as={Link} to="/Contato" href="/Contato">Pontos de Coleta</Nav.Link>
                    
                </Nav>  
                <Nav>
                    <Nav.Link  as={Link} to="/Login" href="/Login">Login</Nav.Link>
                </Nav>      
            </Navbar.Collapse>
        </Navbar>

    );
};

const Menu = withRouter(BaseMenu);

export default Menu;