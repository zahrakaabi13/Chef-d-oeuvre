import { MainMenu } from '../components/Navbar'
import { BottomNavbar} from '../components/BottomNavbar'
import { Container } from 'react-bootstrap'
import  ownerPic  from '../images/owner-pic.png'
import { NewLetter } from '../components/NewLetter'
import { Footer } from '../components/Footer'

export const DiscoverUs = () => {
    return (
        <>
          <MainMenu/>
          <BottomNavbar/>
          
          <Container className="DiscoverUs text-center">
            <p>FOUNDING   PURPOSE</p>
            <h1>FOUNDED WITH THE AMBITION to CHANGE an ENTIRE INDUSTRY</h1>
            
            <img className="mt-5" src={ownerPic} alt="" />
            
            <p>THE FOUNDER, ZAHRA KAABI IS AN  AMBITIOUS YOUNG GIRL. “I ALWAYS LOVED THE COMBINATION OF DESIGN AND WEB DEVELOPEMENT, AND I ALWAYS WISHED TO GET INVOLVED AND ADDING VALUE TO A WEBSITE” SHE SAID.</p>
          </Container> 

          <Container className="DiscoverUs-details p-5 mx-auto">
            <h3>Discover us</h3>
            <p className="mt-5">OBSESSION is an online community of artists and designers and an e-commerce site. Its goal is to help artists succeed. <br></br><br></br>
            
            They are our partner, promoting their art. If you are an artist, we want your art to be seen, everywhere. And if you're a fan, we want you to find works of art and products that allow you to celebrate your uniqueness and we want you to be a part of our website by choosing and scoring a design that will be sold if it gets the highest number of votes in a specific period of time. <br></br><br></br>
            
            We also support creative expression that stimulates cultural change and loves art that sparks conversation. OBSESSION is both a courageous space for artists to share their creations and a safe space for all identities to find art that supports the things they care about.</p>
          </Container>   
     
          <Container className="text-center p-5">
            <h2>OUR VALUES</h2>
            <div className="values-details mt-5">
                <div>
                    <i className="far fa-lightbulb"></i>
                    <h6>CREATIVITY</h6>
                </div>

                <div>
                    <i className="fas fa-laptop-code"></i>
                    <h6>COMMITMENT</h6>
                </div>

                <div>
                    <i className="far fa-handshake"></i>
                    <h6>TRUST</h6>
                </div>
            </div>
          </Container>

          <NewLetter/>
          <Footer/>
        </>
    )
}