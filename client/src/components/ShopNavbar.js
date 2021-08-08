import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"
import '../CSS/Shop.css'

export const ShopNavbar = () => {
    return(
        <>
        <h1 className="title contmmm">SHOP</h1>
        <Navbar collapseOnSelect expand="lg" className="ShophigherMenu shopBar mt-5 pt-3" fixed="top">
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse className="" id="responsive-navbar-nav">
            <Nav className="cont mx-auto p-2">
                <Link className="Shop--linked--page me-4" to="/">NEW</Link>
                <Link className="Shop--linked--page right-line me-4" to="/">THEMES</Link>
                <Link className="Shop--linked--page right-line me-4" to="/">MEN</Link>
                <Link className="Shop--linked--page right-line me-4" to="/">WOMAN</Link>
                <Link className="Shop--linked--page right-line me-4" to="/">CUSTOM</Link>
                <Link className="Shop--linked--page right-line" to="/">COMMUNITY</Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    )
}