import { MainMenu } from '../../components/Navbar'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import '../../CSS/Register.css'
import { Footer } from '../../components/Footer'

export const  Register = ({ history }) => {

    //Declaring form input's state
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      }
    }

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("")
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/OBSESSION/authentification/register",
        {
          username,
          email,
          password
        },
        config
      ).then(res=>res.data)
       .then(res => window.location.reload())

      localStorage.setItem("authToken", data.token);

      history.push("/");

    } catch (error) {
      setError(error.response.data.error);
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
              <form onSubmit={registerHandler}>
              {error && <span className="error-message">{error}</span>}
                <input type="text" placeholder="Enter username" required 
                       name = "username"
                       value={username} 
                       onChange={ e =>setUsername(e.target.value)}/>
                <input type="email" placeholder="Enter email" required 
                       name = "email"
                       value={email} 
                       onChange={ e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter password" required 
                      name = "password"
                      value={password} 
                      onChange={ e => setPassword(e.target.value)}/>
                <input type="password" placeholder="Comfirm password" required 
                      name = "comfirmpassword"
                      value={confirmpassword} 
                      onChange={ e => setConfirmPassword(e.target.value)}/>
                 <button type="submit">Register</button>
                <span className="register-screen__subtext">
                   Already have an account? <Link to="/login">Login</Link>
                </span>
              </form>
            </Col>

            <Col md={6} className="register-details mt-5">
              <h1>OBSESSION </h1>
              <h2>register</h2>
              <img src="/img/girl-login.jpeg" alt="register-img"/>
              <p> Every purchase you make directly supports the artist who created the design, with your score and your vote. There is a surprise for you with every purchase you make</p>
              <h1 className="lower-text">ood</h1>
            </Col>
          </Row>
          </section>
          <Footer/>
        </>
    )
}