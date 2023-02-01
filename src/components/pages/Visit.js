import atlanta from "../../images/atlanta.JPEG"; 
function Visit() {
    return (
        <div className="grid-container">
            {/* main image for location */}
            <div>
                <img atl="Atlanta, GA" src={atlanta}></img>
            </div>
            {/* state tabs */}
            <div>
                {/* tabs */}
                <div>
                    <ul>
                        <li>
                        <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/">Georgia</a>
                        </li>
                    </ul>
                    <h1>Georgia</h1>
                    <p>info</p>
                </div>
            </div>



        </div>

    )
};

export default Visit;