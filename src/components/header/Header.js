import { faVideoSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, NavLink, Navbar } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{"color":'gold'}}>
          <FontAwesomeIcon icon={faVideoSlash} />Gold
        </Navbar.Brand>
        <Nav.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav 
            className = "me-auto my-2 my-lg-0"
            style = {{maxHeight: '100px'}}
            navbarScroll
          >
            <NavLink className="nav-link" to />

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header