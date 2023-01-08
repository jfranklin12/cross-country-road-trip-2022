import './navbar.css';
import logo from "../../images/logo.png";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const styles = {
    image: {
        borderRadius: '50%',
    }
}

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)


    return (
        <nav className='primary-header flex'>
            {/* logo */}
            <div>
                <img alt='logo' src={logo} style={styles.image} />
            </div>
            {/* hamburger */}
            {/* add sr-only to navbar? */}
            <button className='menu-icon' onClick={() => {setShowNavbar(!showNavbar)}}>Menu</button>
            {/* navigation links */}
            <div className={showNavbar ? "primary-navigation mobile" : "primary-navigation"}>
                <ul className="underline-indicators flex">
                    <li>
                        <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/map">Map</a>
                    </li>
                    <li>
                        <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/destinations">Destinations</a>
                    </li>
                    <li>
                        <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/gallery">Gallery</a>
                    </li>
                    <li>
                        <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/more-trips">More Trips</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;