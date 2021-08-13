import { Intro } from '../components/IntroSection'
import { TopSellers } from '../components/TopSellers'
import { PhilosophySection } from '../components/PhilosophySection'
import { Package } from '../components/Package'
import { LandingArt } from '../components/LandingArtCommunity'
import { NewLetter } from '../components/NewLetter'
import { Footer } from '../components/Footer'

export const Landing = () => {
    return (
        <>
          <Intro/>
          <TopSellers/>
          <PhilosophySection/>
          <Package/>
          <LandingArt/>
          <NewLetter/>
          <Footer/>
        </>
    )
} 