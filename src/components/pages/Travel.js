import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline, FeatureGroup } from 'react-leaflet';
import { TypeAnimation } from 'react-type-animation';
import './travel.css';
import locations from '../../data/locations';

function Travel() {

    // empty array to get start and stop value for each polyline
    var start = [];
    var stop = [];
    // all start locations
    for (var i = 0; i < locations.length - 1; i++) {
        start.push([locations[i].location.lat, locations[i].location.lng]);
    }
    // all stop locations
    for (var j = 1; j < locations.length; j++) {
        stop.push([locations[j].location.lat, locations[j].location.lng]);
    }
    // initial position for map
    const position = [34, -100];

    return (
        <div className='grid-container grid-container--travel'>

            {/* Visited Places Section */}
            
                <div>
                    <h1 className='text-accent fs-400 ff-sans-cond uppercase letter-spacing-1 sm-travel-text'>We started in
                        <span className='d-block fs-600 ff-serif text-white travel-text'>Atlanta, GA </span>
                        and traveled </h1>
                
                {/* Traveled States Loop */}
                

                    <TypeAnimation
                        sequence={[
                            'to Alabama',
                            1000,
                            'to Mississippi',
                            1000,
                            'to Arkansas',
                            1000,
                            'to OKlahoma',
                            1000,
                            'to Texas',
                            1000,
                            'to New Mexico',
                            1000,
                            'to Arizona',
                            1000,
                            'to Nevada',
                            1000,
                            'to Califonia',
                            1000,
                        ]}
                        wrapper="span"
                        cursor={false}
                        repeat={Infinity}
                        className='d-block fs-600 ff-serif text-white uppercase travel-text' />
                </div>
            {/* Map container */}
            <div className='container container-map'>
                <MapContainer id="map" center={position} zoom={5} scrollWheelZoom={false}>

                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {/* create marker and popup for each location */}
                    {locations.map(({ id, placeName, date, location }) => {
                        return (
                            <Marker key={id} position={[location.lat, location.lng]}>
                                <Popup>
                                    {placeName} <br /> {date}
                                </Popup>
                            </Marker>

                        )
                    })
                    }
                    {/* create polyline from each destination */}
                    <Polyline pathOptions={`color: 'blue'`} positions={[start, stop]} ></Polyline>

                </MapContainer>
            </div>
        </div>
    );
};

export default Travel;