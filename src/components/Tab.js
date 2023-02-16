import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import days from "../data/days";
import dayOne from "../data/dayOne";
import dayTwo from "../data/dayTwo";
import dayThree from "../data/dayThree";

function TabComponent() {
    return (
        <Tabs forceRenderTabPanel defaultIndex={1}>

            {/* List of Days */}
            <TabList className='text-white fs-600 ff-sans-cond uppercase letter-spacing-4 t-list'>
                {days.map(({ id, day }) => {
                    return (
                        <Tab key={id} className='tabs'>
                            {day}
                        </Tab>
                    )
                })}
            </TabList>

            {/* Day One Location tabs and information */}
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList className='text-white fs-400 ff-sans-cond uppercase letter-spacing-5 t-list'>
                        {dayOne.map(({ id, location }) => {
                            return (
                                <Tab key={id} className='tabs'>{location}</Tab>
                            )
                        })}
                    </TabList>
                    {dayOne.map(({ id, stops, description, location, image }) => {
                        return (
                            <TabPanel key={id}>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stops}</h1>
                                <img alt={location} src={image} className="tab-img" />
                                <p className="letter-spacing-4 para">{description}</p>
                            </TabPanel>
                        )
                    })}
                </Tabs>
            </TabPanel>

            {/* Day Two Location Tabs and information */}
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList className='text-white fs-400 ff-sans-cond uppercase letter-spacing-5 t-list'>
                        {dayTwo.map(({ id, location }) => {
                            return (
                                <Tab key={id} className='tabs'>{location}</Tab>
                            )
                        })}
                    </TabList>
                    {dayTwo.map(({ id, stops, description, location, image }) => {
                        return (
                            <TabPanel key={id}>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stops}</h1>
                                <img alt={location} src={image} className="tab-img" />
                                <p className="letter-spacing-4 para">{description}</p>
                            </TabPanel>
                        )
                    })}
                </Tabs>
            </TabPanel>

            {/* Day Three Location Tabs and information */}
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList className='text-white fs-400 ff-sans-cond uppercase letter-spacing-5 t-list'>
                        {dayThree.map(({ id, location }) => {
                            return (
                                <Tab key={id} className='tabs'>{location}</Tab>
                            )
                        })}
                    </TabList>
                    {dayThree.map(({ id, stop, description, location, image, stopTwo, imageTwo, descriptionTwo }) => {
                        return (
                            <TabPanel key={id}>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stop}</h1>
                                <img alt={stop} src={image} className="tab-img" />
                                <p className="letter-spacing-4 para">{description}</p>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stopTwo}</h1>
                                <img alt={stopTwo} src={imageTwo} className="tab-img" />
                                <p className="letter-spacing-4 para">{descriptionTwo}</p>
                            </TabPanel>
                        )
                    })}
                </Tabs>
            </TabPanel>
        </Tabs>
    );

}

export default TabComponent;