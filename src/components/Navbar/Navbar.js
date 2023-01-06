import './navbar.css'
import logo from "../../images/logo.jpg"

function Navbar() {
    return (
        <div className='primary-header flex'>
            <div>
                <img alt='logo' src={logo} />
            </div>
            <div>
                <ul className="primary-navigation underline-indicators flex">
                    <li className="active"><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#">Map</a></li>
                    <li><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#">Destinations</a></li>
                    <li><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#">Gallery</a></li>
                    <li><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#">What's Next?</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;