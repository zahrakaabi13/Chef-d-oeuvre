import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const PhilosophySection = () => {
    return (
        <section className="section philosophy-section py-5">
            <Row>
                <Col md={6} className="pt-5">
                    <h1>OUR PHILOSOPHY</h1>
                    <span></span>
                    <p>You MAKE the art.  You CHOOSE the art. You SELL the art. Offering you a NEW way to SHOP</p>
                    <Link className="landing-linked--page me-4 sell-button text-center" to="/">SELL ART</Link>
                </Col>

                <Col md={6} className="philosoph-img text-center">
                    <img src="/img/philosophy.png" alt=""/>
                    <img src="/img/philosophy-cover.png" alt=""/>
                </Col>
            </Row>
        </section>
    )
}