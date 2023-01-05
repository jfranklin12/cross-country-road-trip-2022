import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container flow'>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
