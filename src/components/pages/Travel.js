import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { TypeAnimation } from 'react-type-animation';
import './travel.css';
import locations from '../../data/locations';

function Travel() {

    const position = [33.753746, -84.386330];
    console.log(locations);

    return (
        <div className='container'>
            
            {/* Visited Places Section */}
            <div className='container-grid container-travel'>
                <div>
                    <h1 className='text-accent fs-500 ff-sans-cond uppercase letter-spacing-1 sm-travel-text'>We started in
                        <span className='d-block fs-900 ff-serif text-white travel-text'>Atlanta, GA </span>
                        and traveled </h1>
                </div>
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
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Travel;