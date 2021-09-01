import { Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"

export const AdminNav = () => {

    return (
        <>
           <Nav className="admin-nav" role='navigation'>
               <ul className="mt-2">
                   <li><a href="#"><i class="fas fa-plus me-2"></i></a></li>
                   <li><a href="#"><i className="far fa-bell me-2"></i></a></li>
                   <li><a href="#"><i className="hovered_setting fas fa-cog"></i></a>
                   <ul className="admin_hover_nav">
                        <li><Link className="dash-linked mt-2" to="/dashbord/profile">Profile</Link></li>
                        <li><Link className="dash-linked mt-2" to="/logout">Log out</Link></li>
                    </ul>
                   </li>
               </ul>
               <div className="search-box mt-2 ms-4">
                   <i class="fas fa-search "></i>
                   <input type="text" placeholder="Search" className="input-search"/>
               </div>
           </Nav>
        </>
    )
}