import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navb() {

    return(

    <Navbar bg="black" data-bs-theme="dark" className= 'fixed-top pt-0 pb-0 '>
      <Container>
      <img className='rounded float-start' src="/images/teslaLogo.jpg" alt="Bootstrap" width={60}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5">
            <Nav.Link href="#home" className='text-white fs-5 me-2'>Home</Nav.Link>
            <Nav.Link href="#founder" className='text-white fs-5 ms-2'>Founder</Nav.Link>
            <Nav.Link href="#carTitle" className='text-white fs-5 ms-2'>Cars</Nav.Link>
            <Nav.Link href="#link" className='text-white fs-5 ms-2'>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

