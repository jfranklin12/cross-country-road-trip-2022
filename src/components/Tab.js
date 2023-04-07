import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import days from "../data/days";
import dayOne from "../data/dayOne";
import dayTwo from "../data/dayTwo";
import dayThree from "../data/dayThree";
import dayFour from "../data/dayFour";
import dayFive from "../data/dayFive";
import daySix from "../data/daySix";
import daySeven from "../data/daySeven";

function TabComponent() {
    return (
        <Tabs forceRenderTabPanel defaultIndex={1}>

            {/* List of Days */}
            <TabList className='text-white fs-500 ff-sans-cond uppercase letter-spacing-4 t-list'>
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
                    <TabList className='text-white fs-300 ff-sans-cond uppercase letter-spacing-5 t-list'>
                        {dayOne.map(({ id, location }) => {
                            return (
                                <Tab key={id} className='tabs'>{location}</Tab>
                            )
                        })}
                    </TabList>
                    {dayOne.map(({ id, stop, description, location, image }) => {
                        return (
                            <TabPanel key={id}>
                                <div className="img-container">
                                    <img alt={location} src={image} className="tab-img" />
                                    <h1 className="fs-700 ff-sans uppercase letter-spacing-1 panel-title text-dark">{stop}</h1>
                                </div>
                                <p className="letter-spacing-4 para fs-300">{description}</p>
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
                    {dayTwo.map(({ id, stop, description, location, image }) => {
                        return (
                            <TabPanel key={id}>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stop}</h1>
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
                    {dayThree.map(({ id, stopOne, descriptionOne, location, imageOne, stopTwo, imageTwo, descriptionTwo, stopThree, imageThree, descriptionThree }) => {
                        return (
                            <TabPanel key={id}>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stopOne}</h1>
                                <img alt={stopOne} src={imageOne} className="tab-img" />
                                <p className="letter-spacing-4 para">{descriptionOne}</p>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stopTwo}</h1>
                                <img alt={stopTwo} src={imageTwo} className="tab-img" />
                                <p className="letter-spacing-4 para">{descriptionTwo}</p>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stopThree}</h1>
                                <img alt={stopThree} src={imageThree} className="tab-img" />
                                <p className="letter-spacing-4 para">{descriptionThree}</p>
                            </TabPanel>
                        )
                    })}
                </Tabs>
            </TabPanel>

            {/* Day Four Location Tabs and Information */}
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList className='text-white fs-400 ff-sans-cond uppercase letter-spacing-5 t-list'>
                        {dayFour.map(({ id, location }) => {
                            return (
                                <Tab key={id} className='tabs'>{location}</Tab>
                            )
                        })}
                    </TabList>
                    {dayFour.map(({ id, stopOne, descriptionOne, location, imageOne, stopTwo, imageTwo, descriptionTwo, stopThree, imageThree, descriptionThree }) => {
                        return (
                            <TabPanel key={id}>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stopOne}</h1>
                                <img alt={stopOne} src={imageOne} className="tab-img" />
                                <p className="letter-spacing-4 para">{descriptionOne}</p>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stopTwo}</h1>
                                <img alt={stopTwo} src={imageTwo} className="tab-img" />
                                <p className="letter-spacing-4 para">{descriptionTwo}</p>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stopThree}</h1>
                                <img alt={stopThree} src={imageThree} className="tab-img" />
                                <p className="letter-spacing-4 para">{descriptionThree}</p>
                            </TabPanel>
                        )
                    })}
                </Tabs>
            </TabPanel>

            {/* Day Five Location Tabs and Information */}
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList className='text-white fs-400 ff-sans-cond uppercase letter-spacing-5 t-list'>
                        {dayFive.map(({ id, location }) => {
                            return (
                                <Tab key={id} className='tabs'>{location}</Tab>
                            )
                        })}
                    </TabList>
                    {dayFive.map(({ id, stopOne, descriptionOne, location, imageOne }) => {
                        return (
                            <TabPanel key={id}>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stopOne}</h1>
                                <img alt={stopOne} src={imageOne} className="tab-img" />
                                <p className="letter-spacing-4 para">{descriptionOne}</p>
                            </TabPanel>
                        )
                    })}
                </Tabs>
            </TabPanel>

            {/* Day Six Location Tabs and Information */}
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList className='text-white fs-400 ff-sans-cond uppercase letter-spacing-5 t-list'>
                        {daySix.map(({ id, location }) => {
                            return (
                                <Tab key={id} className='tabs'>{location}</Tab>
                            )
                        })}
                    </TabList>
                    {daySix.map(({ id, stopOne, descriptionOne, location, imageOne, stopTwo, imageTwo, descriptionTwo, stopThree, imageThree, descriptionThree }) => {
                        return (
                            <TabPanel key={id}>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stopOne}</h1>
                                <img alt={stopOne} src={imageOne} className="tab-img" />
                                <p className="letter-spacing-4 para">{descriptionOne}</p>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stopTwo}</h1>
                                <img alt={stopTwo} src={imageTwo} className="tab-img" />
                                <p className="letter-spacing-4 para">{descriptionTwo}</p>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stopThree}</h1>
                                <img alt={stopThree} src={imageThree} className="tab-img" />
                                <p className="letter-spacing-4 para">{descriptionThree}</p>
                            </TabPanel>
                        )
                    })}
                </Tabs>
            </TabPanel>

            {/* Day Seven Location Tabs and Information */}
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList className='text-white fs-400 ff-sans-cond uppercase letter-spacing-5 t-list'>
                        {daySeven.map(({ id, location }) => {
                            return (
                                <Tab key={id} className='tabs'>{location}</Tab>
                            )
                        })}
                    </TabList>
                    {daySeven.map(({ id, stopOne, descriptionOne, location, imageOne }) => {
                        return (
                            <TabPanel key={id}>
                                <h1 className="fs-700 ff-serif uppercase letter-spacing-1 panel-title">{stopOne}</h1>
                                <img alt={stopOne} src={imageOne} className="tab-img" />
                                <p className="letter-spacing-4 para">{descriptionOne}</p>
                            </TabPanel>
                        )
                    })}
                </Tabs>
            </TabPanel>
        </Tabs>
    );

}

export default TabComponent;