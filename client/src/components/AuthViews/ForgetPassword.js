import { MainMenu } from '../../components/Navbar'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import '../../CSS/Login.css'
import { Footer } from '../../components/Footer'

export const  ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const forgotPasswordHandler = async (e) => {
      e.preventDefault();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      try {
        const { data } = await axios.post(
          "http://localhost:4000/OBSESSION/authentification/forgotpassword",
          { email },
          config
        );
  
        setSuccess(data.data);
      } catch (error) {
        setError(error.response.data.error);
        setEmail("");
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    };
  

    return (
        <>
         <MainMenu/>
      <section className="register-section">
      <Row>
        <Col md={6} className="register p-5 mb-5">
          <Link to="/" className="back-home">
            <img src="/img/arrow-left.png" alt="" />
            Back to Home
          </Link>
          <form onSubmit={ forgotPasswordHandler }>
          {error && <span className="error-message">{error}</span>}
          {success && <span className="success-message">{success}</span>}
          <p className="forgotpassword-screen__subtext">
            Don't panic ! <br/>
            Please enter the email address you register your account with. We
            will send you reset password confirmation to this email
          </p>
            <input type="email" placeholder="Enter email" required 
                   name = "email"
                   value={email} 
                   onChange={ e => setEmail(e.target.value)} />
             <button type="submit">Send Email</button>
          </form>
        </Col>

        <Col md={6} className="register-details mt-5">
          <h1>OBSESSION </h1>
          <h2>forget password</h2>
          <img src="/img/forget-pass.jpeg" alt="register-img"/>
          <p> Every purchase you make directly supports the artist who created the design, with your score and your vote. There is a surprise for you with every purchase you make</p>
          <h1 className="lower-text">ood</h1>
        </Col>
      </Row>
      </section>
      <Footer/>
        </>
    )
}