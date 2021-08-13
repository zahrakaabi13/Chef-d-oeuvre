import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const LandingNav = () => {
    return (
        <>
         <Navbar collapseOnSelect expand="lg" className="LandingMenu" fixed="top" id="landing-Navbar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="p-2 ms-5">
                <Link className="landing-linked--page me-4" to="/Shop">Shop</Link>
                <Link className="landing-linked--page me-4" to="/Discover us">Discover us</Link>
                <Link className="landing-linked--page" to="/Get in touch">Get in touch</Link>
                </Nav>

                <Nav className="mx-auto">
                <Link className="landing-linked--page logo" to="/">OBSESSION </Link>
                </Nav>

                <Nav className="pe-5">
                <Link className="landing-linked--page ms-4" to="/"><box-icon name='search' color='#000' ></box-icon></Link>
                <Link className="landing-linked--page ms-4" to="/"><box-icon name='user' color='#000' ></box-icon></Link>
                <Link className="linked--page ms-4" to="/"><box-icon name='shopping-bag' color='#000' ></box-icon></Link>
                <Link className="linked--page ms-1" to="/"><span className="landing-bag ps-2 pe-2 pt-1 pb-1">0</span></Link>
                <Link className="linked--page ms-4" to="/"><box-icon name='heart' color='#000' ></box-icon></Link>
                <Link className="linked--page ms-1" to="/"><span className="landing-bag ps-2 pe-2 pt-1 pb-1">0</span></Link>
                </Nav>

            </Navbar.Collapse>
            </Navbar>

            <Navbar collapseOnSelect expand="lg" className="LandingMenu ccc mt-5 pt-3" id="ColorNav">
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse className="border-bottom" id="responsive-navbar-nav">
            <Nav className="mx-auto p-3">
                <Link className="landing-linked--page me-4" to="/">NEW</Link>
                <Link className="landing-linked--page me-4" to="/">THEMES</Link>
                <Link className="landing-linked--page me-4" to="/">MEN</Link>
                <Link className="landing-linked--page me-4" to="/">WOMAN</Link>
                <Link className="landing-linked--page me-4" to="/">CUSTOM</Link>
                <Link className="landing-linked--page" to="/">COMMUNITY</Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    )
}