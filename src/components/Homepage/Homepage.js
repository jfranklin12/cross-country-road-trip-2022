import './homepage.css';

function Homepage() {
  return (
    <div className="grid-container">
      <div>
      <h1 className='text-accent fs-500 ff-sans-cond uppercase letter-spacing-1'>Cross Country Road Trip <span className='fs-900 ff-serif text-white'>Atlanta </span>to <span className='fs-900 ff-serif text-white'>Santa Barabara</span></h1>
      </div>
      <div>
      <a href="#" className="large-button uppercase ff-serif fs-600 text-dark bg-white">Travel</a>
      </div>
    </div>
  );
}

export default Homepage;