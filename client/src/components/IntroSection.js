import { LandingNav } from './LandingNav'
import '../CSS/LandingPage.css'
import { Row, Col } from 'react-bootstrap' 
import landing from '../images/landing.jpg'


export const Intro = () => {
  
    return (
        <>
         <LandingNav/>
          <section id="Landing">
            <Row>
              <Col md={4}>
                  <h1>VINT<span className="vint"></span>
                  <br/>AGE <br/>
                  <span className="knit">KNIT</span></h1>
              </Col>

              <Col md={4} className=" ps-5 pe-3"  data-aos="fade-up">
                  <img src={landing} alt=""/>
              </Col>

              <Col md={4}>
                  <p>
                  Every purchase you make directly supports the artist who created the design, with your score and your vote.
                  There is a surprise for you with every purchase you make
                  </p>
              </Col>
            </Row>
          </section>
        </>
    )
} 