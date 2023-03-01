import './navbar.css';
import {Nav, Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bar() {
  return (
    <>
      <Navbar className='navcolor' bg="" variant="light">
        <Container>
          <img className='logo-img' src='https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg'></img>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Bar;