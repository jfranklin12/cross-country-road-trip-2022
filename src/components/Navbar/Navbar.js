import './navbar.css';
import logo from "../../images/logo.png";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';


const styles = {
    image: {
        borderRadius: '50%',
        margin: `1.5rem clamp(1.5rem, 5vw, 3.5rem)`,
    },
}

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)


    return (
        <div className='primary-header flex'>
            {/* logo */}
            <div>
                <img alt='logo' src={logo} style={styles.image} />
            </div>
            <button className='menu-icon' onClick={() => {setShowNavbar(!showNavbar)}}>{showNavbar ? <FiX /> : <FiMenu />}
                <span className='sr-only'>Menu</span>
            </button>
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
        </div>
    );
}

export default Navbar;