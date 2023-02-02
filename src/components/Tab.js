import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import days from "../data/days";
import dayOne from "../data/dayOne";
import atlanta from "../images/atlanta.JPEG";

function TabComponent() {
    return (
        <Tabs forceRenderTabPanel defaultIndex={1}>
            <TabList className="tabs ff-sans-cond uppercase text-white letter-spacing-3 fs-700">
                {days.map(({ id, day }) => {
                    return (
                        <Tab key={id}>
                            {day}
                        </Tab>
                    )
                })}
            </TabList>

            <TabPanel className="tabs-content">
                <Tabs forceRenderTabPanel>
                    <TabList>
                        {dayOne.map(({ id, location, description, image }) => {
                            return (
                                <Tab key= {id}>{location}</Tab>
                            )
                        })}
                    </TabList>
                    {dayOne.map(({ id, stops, description, location, image}) => {
                        return (
                            <TabPanel key={id}>
                                <h1>{stops}</h1>
                                <img alt={location} src={image}/>
                                <p>{description}</p>
                            </TabPanel>
                        )
                    })}
                </Tabs>
            </TabPanel>

        </Tabs>
    )
}

export default TabComponent;