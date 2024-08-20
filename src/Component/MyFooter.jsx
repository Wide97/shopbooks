import { Navbar, Container, Nav } from "react-bootstrap";

const MyFooter = function () {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" className="fixed-bottom">
        <Container fluid>
          <Navbar.Brand href="#home">Contatti</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Mail</Nav.Link>
              <Nav.Link href="#pricing">tel</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default MyFooter