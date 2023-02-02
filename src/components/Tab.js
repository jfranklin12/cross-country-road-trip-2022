import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import days from "../data/days";
import dayOne from "../data/dayOne";
import atlanta from "../images/atlanta.JPEG";

function TabComponent() {
    return (
        <Tabs>
            <TabList className="tabs ff-sans-cond uppercase text-white letter-spacing-3 fs-700">
                {days.map(({ id, day }) => {
                    return (
                        <Tab key={id}>
                            {day}
                        </Tab>
                    )
                })}
            </TabList>


            {dayOne.map(({ id, date, location, description, image }) => {
                return (
                    <TabPanel key={id} className="tabs-content">
                        <h1>{location}</h1>
                        <img alt="atlanta" src={image}></img>
                        <p>{description}</p>
                        

                    </TabPanel>


                )
            })}


        </Tabs>
    )
}

export default TabComponent;