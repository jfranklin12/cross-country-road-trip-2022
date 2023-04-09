import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import days from "data/days";
import DayInfo from "components/tab/DayInfo.js";
import dayOne from "data/dayOne.js"
import dayTwo from "data/dayTwo";   
import dayThree from "data/dayThree";
import dayFour from "data/dayFour";
import dayFive from "data/dayFive";
import daySix from "data/daySix";
import daySeven from "data/daySeven";


const georgia = [
    {
        id: 1,
        day: 'Day 1',
        date: 'November 29, 2022',
        location: 'Georgia',
        stop: 'Atlanta',
        description: `Let our road trip begin! After two long days of packing, we were finally ready to get on the road! Nick got behind the wheel of his Toyota Tacoma with our U-Haul trailer towing behind him. I got behind the wheel of my Honda Civic, and off we went to California! Atlanta had been out home for many years. Atlanta is a fun-filled city! We spent our time Shooting the Hooch, riding our bikes, hiking, attending sporting events, and so much more! When you visit Atlanta, check out Fat Matt's Rib Shack for some awesome barbeque and catch an Atlanta United, Braves, or Falcons game!`,
        image: atlImg,
    }
];
const alabama = [
    {
        id: 2,
        day: 'Day 1',
        date: 'November 29, 2022',
        location: 'Alabama',
        stop: 'Birmingham',
        description: `For those of you that have been to Alabama, you may know that there's not much to do. Birmingham was directly on our route, so we decided to make it our first stop. I had researched a bit about things to do in Birmingham, and found a great, old, historic park. When we pulled off the interstate, we found the roads difficult to navigate with the trailer. Birmingham is small and bumpy. We tried to find somewhere to park the trailer, but were unsuccessful. With a strom quickly approaching, we cut our losses and got back on the road. On the way back to the highway, we passed through a fun tunnel with lights and music! Not bad for a Tuesday afternoon. I'm sure there were other great things to do in this city, but for us, it was just a gas fill up and a quick break. Until next time!`,
        image: bamaImg,
    }
    
];
const mississippi = [
    {
        id: 3,
        day: 'Day 1',
        date: 'November 29, 2022',
        location: 'Mississippi',
        stop: 'Tunica',
        description: `Our plan was to drive to Tunica, Mississippi as our final destination for the day. We were still racing the clock. The storm seemed to be settling over Mississippi and not moving. It was a hard last leg. We made it to Horseshoe Resort just before the worst part of the storm hit. We weren't sure what to expect, but Horseshoe Resort was a fine place to rest for the night. We explored the Casino and got a bite to eat. The food was excellent and the room was clean and modern. Tunica is a fun place to stop for the night, but the downside was that it ended up being a bit out of the way. Clear, cold skies greeted us in the morning as we began our adventure to Hot Springs, Arkansas.`,
        image: atlImg,
    },
    
];

// const dayOne = [
//     {
//         id: 1,
//         day: 'Day 1',
//         date: 'November 29, 2022',
//         location: 'Georgia',
//         stop: 'Atlanta',
//         description: `Let our road trip begin! After two long days of packing, we were finally ready to get on the road! Nick got behind the wheel of his Toyota Tacoma with our U-Haul trailer towing behind him. I got behind the wheel of my Honda Civic, and off we went to California! Atlanta had been out home for many years. Atlanta is a fun-filled city! We spent our time Shooting the Hooch, riding our bikes, hiking, attending sporting events, and so much more! When you visit Atlanta, check out Fat Matt's Rib Shack for some awesome barbeque and catch an Atlanta United, Braves, or Falcons game!`,
//         image: atlImg,
//     },
//     {
//         id: 2,
//         day: 'Day 1',
//         date: 'November 29, 2022',
//         location: 'Alabama',
//         stop: 'Birmingham',
//         description: `For those of you that have been to Alabama, you may know that there's not much to do. Birmingham was directly on our route, so we decided to make it our first stop. I had researched a bit about things to do in Birmingham, and found a great, old, historic park. When we pulled off the interstate, we found the roads difficult to navigate with the trailer. Birmingham is small and bumpy. We tried to find somewhere to park the trailer, but were unsuccessful. With a strom quickly approaching, we cut our losses and got back on the road. On the way back to the highway, we passed through a fun tunnel with lights and music! Not bad for a Tuesday afternoon. I'm sure there were other great things to do in this city, but for us, it was just a gas fill up and a quick break. Until next time!`,
//         image: bamaImg,
//     },
//     {
//         id: 3,
//         day: 'Day 1',
//         date: 'November 29, 2022',
//         location: 'Mississippi',
//         stop: 'Tunica',
//         description: `Our plan was to drive to Tunica, Mississippi as our final destination for the day. We were still racing the clock. The storm seemed to be settling over Mississippi and not moving. It was a hard last leg. We made it to Horseshoe Resort just before the worst part of the storm hit. We weren't sure what to expect, but Horseshoe Resort was a fine place to rest for the night. We explored the Casino and got a bite to eat. The food was excellent and the room was clean and modern. Tunica is a fun place to stop for the night, but the downside was that it ended up being a bit out of the way. Clear, cold skies greeted us in the morning as we began our adventure to Hot Springs, Arkansas.`,
//         image: atlImg,
//     },
    
// ];


function TabComponent() {
    console.log(...georgia)
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
                        <Tab className='tabs'>{`${dayOne[0].location}`}</Tab>
                        <Tab className='tabs'>{`${dayOne[1].location}`}</Tab>
                        <Tab className='tabs'>{`${dayOne[2].location}`}</Tab>         
                    </TabList>
                    <TabPanel>
                        <DayInfo day={georgia} />
                    </TabPanel>
                    {/* {DayOne.map(({ id, stop, description, image }) => {
                        return (
                            <TabPanel key={id}>
                                <div className="img-container">
                                    <img alt={stop} src={image} className="tab-img" />
                                    <h1 className="fs-600 ff-sans uppercase letter-spacing-2 panel-title text-dark">{stop}</h1>
                                </div>
                                <p className="letter-spacing-5 para fs-300">{description}</p>
                            </TabPanel>
                        )
                    })} */}
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
                    {dayTwo.map(({ id, stop, description, image }) => {
                        return (
                            <TabPanel key={id}>
                                <div className="img-container">
                                    <img alt={stop} src={image} className="tab-img" />
                                    <h1 className="fs-600 ff-sans uppercase letter-spacing-2 panel-title text-dark">{stop}</h1>
                                </div>
                                <p className="letter-spacing-5 para fs-300">{description}</p>

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
                    {dayThree.map(({ id, stopOne, descriptionOne, imageOne, stopTwo, imageTwo, descriptionTwo, stopThree, imageThree, descriptionThree }) => {
                        return (
                            <TabPanel key={id}>

                                {/* first stop for each state Day 3*/}
                                <div className="img-container">
                                    <img alt={stopOne} src={imageOne} className="tab-img" />
                                    <h1 className="fs-600 ff-sans uppercase letter-spacing-2 panel-title text-dark">{stopOne}</h1>
                                </div>
                                <p className="letter-spacing-5 para fs-300">{descriptionOne}</p>

                                {/* second stop for each state Day 3*/}
                                <div className="img-container">
                                    <img alt={stopTwo} src={imageTwo} className="tab-img" />
                                    {/* Decide how to fix this header for O.K. */}
                                    <h1 className="fs-600 ff-sans uppercase letter-spacing-2 panel-title text-dark lg-panel-title">{stopTwo}</h1>
                                </div>
                                <p className="letter-spacing-5 para fs-300">{descriptionTwo}</p>

                                {/* third stop for each state Day 3*/}
                                <div className="img-conatiner">
                                    <img alt={stopThree} src={imageThree} />
                                    <h1 className="fs-600 ff-sans uppercase letter-spacing-2 panel-title text-dark">{stopThree}</h1>
                                </div>
                                <p className="letter-spacing-5 para fs-300">{descriptionThree}</p>

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
                                <h1 className="fs-700 ff-sans uppercase letter-spacing-1 panel-title text-dark">{stopOne}</h1>
                                <img alt={stopOne} src={imageOne} className="tab-img" />
                                <p className="letter-spacing-4 para">{descriptionOne}</p>
                                <h1 className="fs-700 ff-sans uppercase letter-spacing-1 panel-title text-dark">{stopTwo}</h1>
                                <img alt={stopTwo} src={imageTwo} className="tab-img" />
                                <p className="letter-spacing-4 para">{descriptionTwo}</p>
                                <h1 className="fs-700 ff-sans uppercase letter-spacing-1 panel-title text-dark">{stopThree}</h1>
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
                                <h1 className="fs-700 ff-sans uppercase letter-spacing-1 panel-title text-dark">{stopOne}</h1>
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
                                <h1 className="fs-700 ff-sans uppercase letter-spacing-1 panel-title text-dark">{stopOne}</h1>
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
                    <TabList className='fs-700 ff-sans uppercase letter-spacing-1 panel-title text-dark'>
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