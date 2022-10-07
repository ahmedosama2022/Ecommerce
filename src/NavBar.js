
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
function NavScrollExample(totelItem) {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src='https://www.tradelinestores.com/assets/imgs/navbar/logo2.png' style={{width:'130px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ><Link class="nav-link active"to="/" style={{color:'white',fontSize:'20px',marginLeft:'90px' }}>Home</Link>
          <Link class="nav-link active"to="/shop" style={{color:'white',fontSize:'20px',marginLeft:'90px' }}>shop</Link>
          <Link class="nav-link active"to="/Contact" style={{color:'white',fontSize:'20px',marginLeft:'90px' }}>Contact</Link>
          <Link class="nav-link active"to="/Cart" style={{color:'white',fontSize:'20px',marginLeft:'90px' }}><iconify-icon icon="carbon:shopping-cart"></iconify-icon>
          </Link>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;