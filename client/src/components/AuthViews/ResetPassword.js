import { MainMenu } from '../../components/Navbar'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import '../../CSS/Login.css'
import { Footer } from '../../components/Footer'


export const  ResetPassword = ( { match } ) => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }

    try {
      const { data } = await axios.put(
        `http://localhost:4000/OBSESSION/authentification/passwordreset/${match.params.resetToken}`,
        {
          password,
        },
        config
      )

      console.log(data)
      setSuccess(data.data)
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
          <form onSubmit={ resetPasswordHandler }>
          {error && <span className="error-message">{error} </span>}
          {success && (
            <span className="success-message">
              {success} <Link to="/login">Login</Link>
            </span>
          )}
            <input type = "password" placeholder="Enter password" required 
                  name = "password"
                  value = {password} 
                  onChange = { e => setPassword(e.target.value)}
                  autoComplete ="true" />
            <input type = "password" placeholder="Confirm new password" required 
                name = "confirmpassword"
                value={ confirmPassword } 
                onChange = { e => setConfirmPassword(e.target.value)}
                autoComplete ="true" />
             <button type="submit">Reset Password</button>
             <span className="login-screen__subtext">
              Don't have an account? <Link to="/register">Register</Link>
             </span>
          </form>
        </Col>

        <Col md={6} className="register-details mt-5">
          <h1>OBSESSION </h1>
          <h2>reset password</h2>
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