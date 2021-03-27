import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { VscGithub } from 'react-icons/vsc';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Wonky Wheel</Navbar.Brand>
        <Nav>
          <Nav.Link eventKey={2} href="https://github.com/talbotp/wonkywheel">
            <Button variant="light"><VscGithub /><span className="pl-1">Github</span></Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
