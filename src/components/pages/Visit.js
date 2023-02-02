import atlanta from "../../images/atlanta.JPEG";
import TabComponent from "../Tab.js";
import "./Visit.css"

function Visit() {
    return (
        <div className="container">
            {/* main image for location */}
            <div className="container">
                <img alt="georgia" src={atlanta} className="visit-img"></img>
            </div>
            {/* state tabs */}
            <div>
                {/* tabs */}
                    <TabComponent />
            </div>



        </div>

    )
};

export default Visit;