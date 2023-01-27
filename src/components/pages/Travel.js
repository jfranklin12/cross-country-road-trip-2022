import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import './travel.css';

function Travel() {

    const position = [33.753746, -84.386330]
    return (
        <div className='grid-container'>
            <div>
                <h1 className='text-accent fs-500 ff-sans-cond uppercase letter-spacing-1'>We started in
                <span className='d-block fs-900 ff-serif text-white'>Atlanta, GA </span>
                and traveled to
                {/* <span className='d-block fs-900 ff-serif text-white'>Tunica, MS </span>
                <span className='d-block fs-900 ff-serif text-white'>Durrant, OK </span>
                <span className='d-block fs-900 ff-serif text-white'>Amarillo, TX </span>
                <span className='d-block fs-900 ff-serif text-white'>Amarillo, TX </span> */}
                </h1>
            </div>
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
    );
};

export default Travel;