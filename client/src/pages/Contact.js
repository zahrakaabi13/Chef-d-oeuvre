import { MainMenu } from '../components/Navbar'
import { BottomNavbar } from '../components/BottomNavbar'
import '../CSS/Contact.css'
import { Row, Col } from 'react-bootstrap'
import { NewLetter } from '../components/NewLetter'
import { Footer } from '../components/Footer'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../actions/ContactAction'

export const Contact = () => {
    
    const dispatch = useDispatch()
    const contact = useSelector(state=>state.contactstore.datas)

    //Declaring form input's state
    const [input, setInput] = useState({
      name : "",
      email : "",
      message : ""
    }) 
  
    //Posting data to the db.json==============================
    const handelSubmit=(e)=>{
      e.preventDefault()
       dispatch( addContact(input.name, input.email, input.message))
       console.log('val input', input)
     }
    return (
        <>
          <MainMenu/>
          <BottomNavbar/>
          
          <Row className="pe-5">
              <Col md={6} className="bg-contact"></Col>

              <Col md={6} className="contact-form p-5">
                  <h1>GET IN TOUCH  <br/>
                      <span>Leave us a message</span>
                  </h1>
                  <form onSubmit={handelSubmit}>
                    <input type="text" placeholder="Name"
                    name = "name"
                    value={input.name} 
                    onChange={ e =>setInput({...input, name : e.target.value})}/>
                    <input type="email" placeholder="Email"
                    name = "email"
                    value={input.email} 
                    onChange={ e =>setInput({...input, email : e.target.value})}/>
                    <textarea placeholder="Message"
                    name = "messsage"
                    value={input.message} 
                    onChange={ e =>setInput({...input, message : e.target.value})}></textarea>
                    <button type="submit"> SEND MESSAGE</button>
                  </form>
              </Col>
          </Row>

          
          <section className="contact-details p-5 mt-5">
              <h1>QUICK <br/> SUPPORT </h1>
              <span>YOU CAN GET ALL THE CONTACT INFORMAION</span>
              

              <Row className="contact-inner-text mt-5 pt-3">
                  <Col md={4}>
                      <i class="fas fa-map-marker-alt"></i>
                      <h6>Visit us</h6>
                      <p>Cité tahrir, Omrane aala, tunisie</p>
                  </Col>

                  <Col md={4}>
                      <i class="fas fa-phone-alt"></i>
                      <h6>Call us</h6>
                      <p>(+216) 20 222 222 <br/>
                         (+216) 97 128 421</p>
                  </Col>

                  <Col md={3}>
                      <i class="fas fa-envelope"></i>
                      <h6>Email us</h6>
                      <p>kaabizahra@gmail.com</p>
                  </Col>
              </Row>
          </section>

          <NewLetter/>
          <Footer/>
        </>
    )
}