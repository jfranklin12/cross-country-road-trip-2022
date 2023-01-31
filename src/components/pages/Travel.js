import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline, FeatureGroup } from 'react-leaflet';
import { TypeAnimation } from 'react-type-animation';
import './travel.css';
import locations from '../../data/locations';

function Travel() {
    // console.log(locations)
    // const tripLines = [
    //     [locations[0].location.lat, locations[0].location.lng],
    //     [locations[1].location.lat, locations[1].location.lng],
    // ];
    // console.log(tripLines)
    var start = [];
    var stop = [];

    for (var i = 0; i < locations.length -1; i++) {
        start.push([locations[i].location.lat, locations[i].location.lng]);
    }
    for (var j = 1; j < locations.length; j++) {
        stop.push([locations[j].location.lat, locations[j].location.lng]);
    }
    console.log(start);
    console.log(stop);
    

    const position = [33, -100];

    return (
        <div className='container'>

            {/* Visited Places Section */}
            <div className='container-grid container-travel'>
                <div>
                    <h1 className='text-accent fs-500 ff-sans-cond uppercase letter-spacing-1 sm-travel-text'>We started in
                        <span className='d-block fs-900 ff-serif text-white travel-text'>Atlanta, GA </span>
                        and traveled </h1>
                </div>
                {/* Traveled States Loop */}
                <div>

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
                        className='d-block fs-900 ff-serif text-white uppercase travel-text' />
                </div>
            </div>
            {/* Map container */}
            <div className='container'>
                <MapContainer id="map" center={position} zoom={5} scrollWheelZoom={false}>

                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

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
                    <Polyline pathOptions={ `color: 'blue'` } positions={[start, stop]} ></Polyline>
                    



                </MapContainer>
            </div>
        </div>
    );
};

export default Travel;