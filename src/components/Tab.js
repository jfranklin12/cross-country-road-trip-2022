import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import locations from "../data/locations";

function TabComponent() {
    return (
        <Tabs>
            <TabList>
            {locations.map(({ id, placeName }) => {
                            return (
                                <Tab key={id} className="ff-sans-cond uppercase text-white letter-spacing-2">
                                    {placeName}
                                </Tab>
                            )
                        })}
            </TabList>

            
                {locations.map(({ id, date, description}) => {
                    return (
                        <TabPanel>
                            <h1>{date}</h1>

                        </TabPanel>
                        

                    )
                })}
            

        </Tabs>
    )
}

export default TabComponent;