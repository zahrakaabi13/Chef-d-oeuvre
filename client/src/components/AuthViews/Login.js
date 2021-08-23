import { MainMenu } from '../../components/Navbar'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../CSS/Login.css'
import { Footer } from '../../components/Footer'


export const  Login = ( { history } ) => {

  //Declaring form input's state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  //if its logged take him/her to /
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
      }
    }, [history]);          

    const loginHandler = async (e) => {
      e.preventDefault();

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }

  try {
    const { data } = await axios.post(
      "http://localhost:4000/OBSESSION/authentification/login",
      {
        email,
        password
      },
      config
    );

    localStorage.setItem("authToken", data.token);

    history.push("/private");
  } catch (error) {
    setError(error.response.data.error);
    setTimeout(() => {
      setError("");
    }, 5000); //5 secs
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
          <form onSubmit = { loginHandler } >
          {error && <span className="error-message">{error}</span>}
            <input type="email" placeholder="Enter email" required 
                   name = "email"
                   value={email} 
                   onChange={ e => setEmail(e.target.value)}
                   tabIndex = { 1 } />
            <input type = "password" placeholder="Enter password" required 
                  name = "password"
                  value = {password} 
                  onChange = { e => setPassword(e.target.value)}
                  autoComplete ="true"
                  tabIndex = { 2 } />
            <Link to="/forgetpassword" className="login-screen__forgotpassword">
              Forgot Password?
            </Link>
             <button type="submit" tabIndex = { 3 }>Login</button>
             <span className="login-screen__subtext">
              Don't have an account? <Link to="/register" tabIndex = { 4 }>Register</Link>
             </span>
          </form>
        </Col>

        <Col md={6} className="register-details mt-5">
          <h1>OBSESSION </h1>
          <h2>login</h2>
          <img src="/img/girl-signup.jpeg" alt="register-img"/>
          <p> Every purchase you make directly supports the artist who created the design, with your score and your vote. There is a surprise for you with every purchase you make</p>
          <h1 className="lower-text">ood</h1>
        </Col>
      </Row>
      </section>
      <Footer/>
    </>
    )
}