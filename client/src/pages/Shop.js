import { MainMenu } from "../components/Navbar"
import { ShopNavbar }  from '../components/ShopNavbar'
import  ProductList  from '../components/ShopProducts'
import { Footer } from '../components/Footer'

export const Shop = () => {
    return (
        <>
          <MainMenu/>
          <ShopNavbar/>
          <ProductList/>
          <Footer/>
        </>
    )
}