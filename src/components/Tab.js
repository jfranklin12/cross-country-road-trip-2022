import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import days from "../data/days"

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


            {days.map(({ id, date, description }) => {
                return (
                    <TabPanel key={id} className="tabs-content">
                        <h1>{date}</h1>

                    </TabPanel>


                )
            })}


        </Tabs>
    )
}

export default TabComponent;