import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = () => {
    const mapOptions = {
        height: '60vh',
        width: '70vh'
    }

    const center = {
        lat: 40.6892,
        lng: -74.0445
    }

    const [selected, setSelected] = useState({});

    const locations = [
        {
            id: 42,
            location: {
                lat: 40.777384,
                lng: -73.9803
            },
        },
        {
            id: 43,
            location: {
                lat: 43.651070,
                lng: -79.347015
            },
        },
    ]

    const handleClick = (home) => {
        window.location = `/#/homes/${home.id}`
    }

    return (
        <GoogleMap
            mapContainerStyle={mapOptions}
            zoom={11}
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