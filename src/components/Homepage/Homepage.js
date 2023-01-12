import './homepage.css';

function Homepage() {
  return (
    <div className="grid-container grid-container--home">
      <div>
      <h1 className='text-accent fs-500 ff-sans-cond uppercase letter-spacing-1'>Cross Country
      <span className='d-block fs-900 ff-serif text-white'>Atlanta </span>
      to
      <span className='d-block fs-900 ff-serif text-white'>Santa Barbara</span></h1>
      {/* <p>Follow our trip across the country! We learned a lot about traveling from this trip, and we want to share it with you! Check out all the places we stopped, and other cool places we visited!</p> */}
      </div>
      <div className='align-right'>
      <a href="#" className="large-button uppercase ff-serif text-dark bg-white">Travel</a>
      </div>
    </div>
  );
}

export default Homepage;