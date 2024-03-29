import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from 'components/Navbar/Navbar';
import Homepage from 'components/Homepage/Homepage';
import Travel from 'components/Pages/Travel'
import Visit from "components/Pages/Visit";
import Gallery from "components/Pages/Gallery.js";
import More from "components/Pages/More.js";
import Footer from 'components/Footer';
import backgroundDesktop from 'images/background-grand-canyon.JPEG';
import backgroundMobile from 'images/background-mobile.JPEG';


function App() {

  let component
  switch (window.location.pathname) {
    case "/":
      component = < Homepage/>;
      break;
    case "/travel":
      component = <Travel />;
      break;
    case "/visit":
      component = <Visit />;
      break;
    case "/gallery":
      component = <Gallery />;
      break;
    case "/more":
      component = <More />;
      break;
  }

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
      {component}
      <Footer />
    </div>

  );
}

export default App;
