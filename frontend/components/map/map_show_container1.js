import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = () => {
    // debugger;
    const mapOptions = {
        height: '60vh',
        width: '70vh',
        border: "5px solid black"
    }

    const center = {
        lat: 40.777384,
        lng: -73.9803
    }

    const [selected, setSelected] = useState({});
    // debugger;
    const locations = [
        {
            id: 1,
            location: {
                lat: 40.777384,
                lng: -73.9803
            },
        },
    ]

    const handleClick = (home) => {
        window.location = `/#/homes/${home.id}`
    }
    // debugger;
    return (
        <GoogleMap
            mapContainerStyle={mapOptions}
            zoom={15}
            center={center}>
            {
                locations.map(home => {
                    return (
                        <Marker
                            id={home.id}
                            position={home.location}
                            onClick={() => handleClick(home)}
                        />
                    )
                })
            }
            {
                selected.location &&
                (
                    <InfoWindow
                        position={selected.location}
                        clickable={true}
                        onCloseClick={() => setSelected({})}
                    >
                        <p>{selected.name}</p>
                    </InfoWindow>
                )
            }
        </GoogleMap>
    )
}

export default MapContainer;