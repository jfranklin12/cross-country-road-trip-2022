import './navbar.css';
import logo from "../../images/logo.png";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';


const styles = {
    image: {
        borderRadius: '50%',
        margin: `1.5rem clamp(1.5rem, 5vw, 3.5rem)`,
        order: 3,
    },
}

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)


    return (
        <div className='primary-header flex'>
            {/* logo */}
            <a href="/">
                <img alt='logo' src={logo} style={styles.image} />
            </a>
            <button className='menu-icon' onClick={() => {setShowNavbar(!showNavbar)}}>{showNavbar ? <FiX /> : <FiMenu />}
                <span className='sr-only'>Menu</span>
            </button>
            {/* navigation links */}
            <nav className={showNavbar ? "primary-navigation mobile" : "primary-navigation"}>
                <ul className="underline-indicators flex">
                    <li>
                        <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/travel">travel</a>
                    </li>
                    <li>
                        <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/visit">Visit</a>
                    </li>
                    <li>
                        <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/gallery">Gallery</a>
                    </li>
                    <li>
                        <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/more">more</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;