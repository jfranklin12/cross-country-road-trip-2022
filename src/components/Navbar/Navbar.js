import './navbar.css'

function Navbar () {
    return ( 
        <div>
            {/* <h1>Let's Travel</h1> */}
                <ul className="primary-navigation underline-indicators flex">
                    <li className="active"><a className="uppercase text-white letter-spacing-2" href="#">Map</a></li>
                    <li><a className="uppercase text-white letter-spacing-2" href="#">Destinations</a></li>
                    <li><a className="uppercase text-white letter-spacing-2"  href="#">Gallery</a></li>
                    <li><a className="uppercase text-white letter-spacing-2"  href="#">What's Next?</a></li>
                </ul>
        </div>
     );
}
 
export default Navbar;