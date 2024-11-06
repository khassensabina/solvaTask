import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function NavMenu() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch({type:'LOGOUT'});
        navigate('/');
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Star Wars World</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/starwars/people">People</Nav.Link>
                    <Nav.Link as={Link} to="/starwars/planets">Planets</Nav.Link>
                    <Nav.Link as={Link} to="/starwars/starships">Starships</Nav.Link>
                    <Nav.Link as={Link} to="/" onClick={onLogout}>LOGOUT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}