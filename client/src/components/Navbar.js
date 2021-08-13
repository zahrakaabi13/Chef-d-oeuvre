import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"

export const MainMenu = () => {
    return (
        <>
         <Navbar collapseOnSelect expand="lg" className="higherMenu" fixed="top" id="landing-Navbar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="p-2 ms-5">
                <Link className="linked--page me-4" to="/Shop">Shop</Link>
                <Link className="linked--page me-4" to="/Discover us">Discover us</Link>
                <Link className="linked--page" to="/Get in touch">Get in touch</Link>
                </Nav>

                <Nav className="mx-auto">
                <Link className="linked--page logo" to="/">OBSESSION </Link>
                </Nav>

                <Nav className="pe-5">
                <Link className="linked--page ms-4" to="/"><box-icon name='search' color='#ffffff' ></box-icon></Link>
                <Link className="linked--page ms-4" to="/"><box-icon name='user' color='#ffffff' ></box-icon></Link>
                <Link className="linked--page ms-4" to="/"><box-icon name='shopping-bag' color='#ffffff' ></box-icon></Link>
                <Link className="linked--page ms-1" to="/"><span className="bag ps-2 pe-2 pt-1 pb-1">0</span></Link>
                <Link className="linked--page ms-4" to="/"><box-icon name='heart' color='#ffffff' ></box-icon></Link>
                <Link className="linked--page ms-1" to="/"><span className="bag ps-2 pe-2 pt-1 pb-1">0</span></Link>
                </Nav>

            </Navbar.Collapse>
            </Navbar>
        </>
    )
}