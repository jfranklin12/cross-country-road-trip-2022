import atlanta from "../../images/atlanta.JPEG";
import TabComponent from "../Tab.js"

function Visit() {
    return (
        <div className="">
            {/* main image for location */}
            <div>
                <img atl="Atlanta, GA" src={atlanta}></img>
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