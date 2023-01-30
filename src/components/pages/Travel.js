import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { TypeAnimation } from 'react-type-animation';
import './travel.css';

function Travel() {

    const position = [33.753746, -84.386330]
    return (
        <div className='container'>
            {/* Visited Places Section */}
            <div className='container-grid container-travel'>
                <div>
                    <h1 className='text-accent fs-400 ff-sans-cond uppercase letter-spacing-1'>We started in
                        <span className='d-block fs-700 ff-serif text-white travel-text'>Atlanta, GA </span>
                        and traveled </h1>
                </div>
                <div>
                    
                    <TypeAnimation
                        sequence={[
                            'to Birmingham, AL',
                            1000,
                            'to Tunica, MS',
                            1000,
                            'to Hot Springs, AR',
                            1000,
                            'to Chickasaw Nation',
                            1000,
                            'to Oklahoma City, OK',
                            1000,
                            'to Albuquerque, NM',
                            1000,
                            'to The Grand Canyon',
                            1000,
                            'to The Hoover Dam',
                            1000,
                            'to Las Vegas, NV',
                            1000,
                            'to Santa Barbara, CA',
                            1000,
                        ]}
                        wrapper="span"
                        cursor={false}
                        repeat={Infinity}
                        className='d-block fs-700 ff-serif text-white uppercase travel-text' />
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