import React from "react";
import { TabPanel } from "react-tabs";
import atlanta from "../../images/dayOne/atlanta.jpg";

function DayInfo(props) {

    return (
                <div key={props.id}>
                    <div className="img-container">
                        <img alt={props.stop} src={props.image} className="tab-img" ></img>
                        <h1 className="fs-600 ff-sans uppercase letter-spacing-2 panel-title text-dark">{`${props.stop}`}</h1>
                    </div>
                    <p className="letter-spacing-5 para fs-300">{props.description}</p>
                </div>




    );
}

export default DayInfo;