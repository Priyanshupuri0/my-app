import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from './Navbar.css';
function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Recruitify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Resources" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Job descriptions
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Case studies</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Tech Salary Data
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hiring Features" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Trust Score</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Resume Score Checker
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Refer & earn</Nav.Link>
            <Nav.Link href="#link">For Employers</Nav.Link>
            
          </Nav>
          <Button variant="primary" className='mx-2'>Find Jobs</Button>
          <Button variant="outline-primary">Hire Talent</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;