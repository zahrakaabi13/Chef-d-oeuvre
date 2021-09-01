import { MainMenu } from '../components/Navbar'
import { BottomNavbar} from '../components/BottomNavbar'
import { Footer } from '../components/Footer'
import '../CSS/ScoreDesign.css'


export const ScoreDesign = () => {
    return (
        <>
          <MainMenu/>
          <BottomNavbar/>
          <h1 className="score-design-title text-center mt-5">MADE BY THE HANDS <br/> OF OUR <br/> COMMUNITY</h1>
          <Footer/>
        </>
    )
}