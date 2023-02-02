import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import days from "../data/days";
import dayOne from "../data/dayOne";
import dayTwo from "../data/dayTwo";
import dayThree from "../data/dayThree";

function TabComponent() {
    return (
        <Tabs forceRenderTabPanel defaultIndex={1} className="tabs-info">

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
            {dayOne.map(({ id, location}) => {
                            return (
                                <Tab key= {id} classname='tabs'>{location}</Tab>
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

        {/* Day Two Location Tabs and information */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
            {dayTwo.map(({ id, location}) => {
                            return (
                                <Tab key= {id}>{location}</Tab>
                            )
                        })}
            </TabList>
            {dayTwo.map(({ id, stops, description, location, image}) => {
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

        {/* Day Three Location Tabs and information */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
            {dayThree.map(({ id, location}) => {
                            return (
                                <Tab key= {id}>{location}</Tab>
                            )
                        })}
            </TabList>
            {dayThree.map(({ id, stops, description, location, image}) => {
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
    );

}

export default TabComponent;