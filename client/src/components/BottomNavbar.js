import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom"


export const BottomNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="higherMenu mt-5 pt-3" fix0ed="top" id="ColorNav">
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse className="" id="responsive-navbar-nav">
            <Nav className="mx-auto p-2">
                <Link className="linked--page me-4" to="/">NEW</Link>
                <Link className="linked--page me-4" to="/">THEMES</Link>
                <Link className="linked--page me-4" to="/">MEN</Link>
                <Link className="linked--page me-4" to="/">WOMAN</Link>
                <Link className="linked--page me-4" to="/">CUSTOM</Link>
                <Link className="linked--page me-4" to="/">COMMUNITY</Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}