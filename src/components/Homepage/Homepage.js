import './homepage.css';

function Homepage() {
  return (
    <div className="grid-container grid-container--home">
      <div>
      <h1 className='text-accent fs-500 ff-sans-cond uppercase letter-spacing-1'>Cross Country Road Trip
      <span className='d-block fs-900 ff-serif text-white'>Atlanta </span>
      to
      <span className='d-block fs-900 ff-serif text-white'>Santa Barbara</span></h1>
      </div>
      <div>
      <a href="#" className="large-button uppercase ff-serif text-dark bg-white">Travel</a>
      </div>
    </div>
  );
}

export default Homepage;