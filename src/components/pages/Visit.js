import TabComponent from "../tab/Tab.js";
import "./Visit.css"

function Visit() {
    return (
        <div className="grid-container">
            <div>
                <h1 className='text-white fs-700 ff-serif uppercase letter-spacing-1'>Cross Country Road Trip</h1>
                <h2 className='text-accent fs-400 ff-sans-cond letter-spacing-3'>My fiancé, Nick, and I set off for the adventure of a life time! We moved from Atlanta, GA to the central coast of California. As we drove across the United States, we visited some amazing locations! Follow our 7-day road trip!</h2>
            </div>
            {/* state tabs */}
            <div className="tabs-container">
                {/* tabs */}
                    <TabComponent />
            </div>



        </div>

    )
};

export default Visit;