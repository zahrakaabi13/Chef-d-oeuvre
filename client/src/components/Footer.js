import '../CSS/Footer.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <>
             <Row className="Footer mt-5">
                 <Col md={3}>
                     <h4>OBSESSION</h4>
                     <div className="contact-icons">
                        <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon>
                        <box-icon name='whatsapp' type='logo' color='#ffffff' ></box-icon>
                     </div>
                 </Col>

                 <Col md={3} className="Footer-block">
                    <Link className="linked--page Footer-block" to="/Shop">Shop</Link>
                    <Link className="linked--page Footer-block mt-4" to="/Collection">Collection</Link>
                    <Link className="linked--page Footer-block mt-4" to="/Sale">Sale</Link>
                    <Link className="linked--page Footer-block mt-4" to="/Community">Community</Link>
                 </Col>

                 <Col md={3} className="Footer-block">
                    <Link className="linked--page Footer-block" to="/Shop">Terms of use</Link>
                    <Link className="linked--page Footer-block mt-4" to="/Collection">Terms of sale</Link>
                    <Link className="linked--page Footer-block mt-4" to="/Sale">Privacy Policy</Link>
                 </Col>

                 <Col md={3}>
                     <h4>Contact us:</h4>
                     <h6 className="mt-4">+216 97 128 421</h6>
                     <h6>kaabizahra@gmail.com</h6>
                       
                     <div className="adress mt-3">
                        <p>43765[2 F]12.JonJores <br></br>
                           132ceon-gil<br></br>
                           Busanjin-gu Basan<br></br>
                           Reapublic of Tunisia</p>
                     </div>
                 </Col>
             </Row>
        </>
    )
}