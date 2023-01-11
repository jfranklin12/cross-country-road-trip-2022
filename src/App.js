import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer';
import backgroundDesktop from './images/background-grand-canyon.JPEG';
import backgroundMobile from './images/background-mobile.JPEG';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const backgroundImage = windowWidth >= 768 ? backgroundDesktop : backgroundMobile;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);  

  return (
    <div style={{backgroundImage: `url(${backgroundImage})`, backgroundPosition: `bottom center`, backgroundSize: `cover`}}>
      <Navbar />
      <Homepage />
      <Footer />
    </div>

  );
}

export default App;
