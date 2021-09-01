import '../../CSS/Admin.css'
import { Link} from "react-router-dom";
import { AdminNav } from '../../components/Admin/NavbarAdmin'
import ProductDashboard from '../ProductDashbord'
import { LandingDash } from '../../components/Admin/LandingDash'
import { Row, Col, Tab, Nav } from 'react-bootstrap'


export const SideBar = () => {
    return (
        <>
            <div className="main_dash">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={2} className="sidebar_wrapper">
                <div className="logo_dash">
                    <Link to='/dashbord' className="linked_dash">OBSESSION</Link>
                </div>

                <Nav className="menu_container flex-column">
                    <Nav.Item><Nav.Link eventKey="first" className="dash_links_tabs py-2">Dashboard</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="second" className="dash_links_tabs py-2">Users</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="designers" className="dash_links_tabs py-2">Designers</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="products" className="dash_links_tabs py-2">Products</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="designs" className="dash_links_tabs py-2">Designs</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="orders" className="dash_links_tabs py-2">Orderss</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="contacts" className="dash_links_tabs py-2">Contacts</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="newsletters" className="dash_links_tabs py-2">Newsletters</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="profile" className="dash_links_tabs py-2">Edit Profile</Nav.Link></Nav.Item>
                </Nav>
                </Col>
                <Col sm={10} className="content_wrapper">
                <Tab.Content>
                    <AdminNav/>
                    <Tab.Pane eventKey="first"><LandingDash/></Tab.Pane>
                    <Tab.Pane eventKey="second">users</Tab.Pane>
                    <Tab.Pane eventKey="designers">designers</Tab.Pane>
                    <Tab.Pane eventKey="products"><ProductDashboard/></Tab.Pane>
                    <Tab.Pane eventKey="designs">designs</Tab.Pane>
                    <Tab.Pane eventKey="orders">orders</Tab.Pane>
                    <Tab.Pane eventKey="contacts">contacts</Tab.Pane>
                    <Tab.Pane eventKey="newsletters">newsletters</Tab.Pane>
                    <Tab.Pane eventKey="profile">profile</Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
            </div>
        </>
    )
}