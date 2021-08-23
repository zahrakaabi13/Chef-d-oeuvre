import { Link } from 'react-router-dom'
import '../CSS/Menu.css'


export const Menu = () => {
    return (
        <>
		<div className="nav-container">
        <Link className="menu-close" to="/">Close</Link>
			<nav className="menu">
				<div className="menu__item">
                <Link className="menu__item-link" to="/">Home</Link>
					<img className="menu__item-img" src="/img/menu-img-one.jpg" alt="Home-img"/>
					<div className="marquee">
						<div className="marquee__inner">
							<span>Home - Home - Home - Home - Home - Home - Home</span>
						</div>
					</div>
				</div>
				<div className="menu__item">
                <Link className="menu__item-link" to="/Shop">Shop</Link>
					<img className="menu__item-img" src="/img/fashionista.jpeg" alt="Showcase-img" />
					<div className="marquee">
						<div className="marquee__inner">
							<span
								>Shop - Shop - Shop - Shop - Shop - Shop
								- Shop</span
							>
						</div>
					</div>
				</div>
				<div className="menu__item">
                <Link className="menu__item-link" to="/Discover us">About</Link>
					<img className="menu__item-img" src="/img/menu-img-three.jpg" alt="About-img"/>
					<div className="marquee">
						<div className="marquee__inner">
							<span>About - About - About - About - About - About - About</span>
						</div>
					</div>
				</div>
				<div className="menu__item">
                <Link className="menu__item-link" to="/Get in touch">Contact</Link>
					<img className="menu__item-img" src="/img/menu-img-four.jpg" alt="Contact-img"/>
					<div className="marquee">
						<div className="marquee__inner">
							<span
								>Contact - Contact - Contact - Contact - Contact - Contact -
								Contact</span>
						</div>
					</div>
				</div>
			</nav>
		</div>
        </>
    )
}