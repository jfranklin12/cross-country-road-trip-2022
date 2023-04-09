import React from "react";
import { TabPanel } from "react-tabs";

function DayInfo(props) {

    return (
        <div>
                        {props.day.map(item => (
                <div key={item.id}>
                <div className="img-container">
                <img alt={item.stop} src={item.image} className="tab-img" />
                <h1 className="fs-600 ff-sans uppercase letter-spacing-2 panel-title text-dark">{item.stop}</h1>
            </div>
            <p className="letter-spacing-5 para fs-300">{item.description}</p>
            </div>
            ))}
        </div>
        // <TabPanel>

            
        // </TabPanel>
    );
}

export default DayInfo;