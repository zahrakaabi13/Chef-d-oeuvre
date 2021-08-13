import imagePackage from '../images/imagePackage.png'
import { Link } from "react-router-dom"

export const Package = () => {
    return (
        <section className="section package text-center p-5">
         <h1>WANT YOU <br/>KNOW ABOUT <br/>OUR PACKAGE ?</h1>
         <p>A surprise with every purchase you make.</p>
         <img src={imagePackage} alt="" className="px-5 pb-3 pt-5 mx-5"/>
         <p>Whether Elon Musk likes it or not, we’re all going to have to live on this planet for a while yet. To us, that means living with it, too. Putting back some of what we’ve all taken. </p>
         <p>We are offering green packaging wich is made out of recycled materials that is safe for you and the environment.</p>
         <div className="mt-5">
         <Link className="make-purchase" to="/Shop">MAKE A PURCHASE</Link>
         </div>
        </section>
    )
}