import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {

  let obtenerTexto = document.querySelector("#entrada_busqueda").value
  console.log(obtenerTexto)
  //const [texto, setTexto] = useState('');
  
  return (
    <Navbar bg="bg-secondary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">TESIS UCA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Tesis..."
              className="me-2"
              aria-label="Search"
              id = "entrada_busqueda"
            />
            <Button  
              variant="outline-success" 
              className="input-buscar"
              onClick={() => console.log(obtenerTexto)}
            >Buscar</Button>
          </Form>
        </Navbar.Collapse>
        <Button 
          className = "ms-1 me-2" 
          variant="Light"
        >Login</Button>{' '}
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;