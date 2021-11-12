// import React, { useState } from 'react';
// // import React from "react";
// import { connect } from "react-redux";
// // import HomeIndex2 from "./home_index2";
// import { fetchHome, fetchHomes } from "../../actions/home_action";
// import { withRouter } from "react-router-dom";
// // withRouter provides access to extra props such as match location and history;
// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// // import { withRouter } from "react-router-dom";
// import MapDisplay from './map_display';

// const MapContainer = () => {
//     // debugger;

//     const mapOptions = {
//         height: '450px',
//         width: '80%'
//     }

//     const center = {
//         lat: 42.26007449000000,
//         lng: -76.6249469900000
//     }

//     const [selected, setSelected] = useState({});

//     const locations = [
//         {
//             id: 42,
//             location: {
//                 lat: 40.777384,
//                 lng: -73.9803
//             },
//         },
//         {
//             id: 43,
//             location: {
//                 lat: 43.642100,
//                 lng: -79.381550
//             },
//         }
//     ]

//     const handleClick = (item) => {
//         // debugger;
//         // window.location = `/#/homes/${home.id}`
//         props.history.push(`/homes/${home.id}`);
//     }
//     // debugger;

//     return (
//         <GoogleMap
//             mapContainerStyle={mapOptions}
//             className="show-google-map"
//             zoom={4}
//             center={center}>
//             {
//                 locations.map(item => {
//                     return (
//                         <Marker
//                             id={item.id}
//                             position={item.location}
//                             onClick={() => handleClick(item)}
//                         />
//                     )
//                 })
//             }
//             {
//                 selected.location &&
//                 (
//                     <InfoWindow
//                         position={selected.location}
//                         clickable={true}
//                         onCloseClick={() => setSelected({})}
//                     >
//                         <p>{selected.name}</p>
//                     </InfoWindow>
//                 )
//             }
//         </GoogleMap>
//     )
// };


// const mapState = (state) => ({
//     homes: Object.values(state.entities.homes),
//     // city 
// });

// const MappContainer = connect(mapState, null)(MapContainer);

// export default MappContainer;

import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = () => {
    const mapOptions = {
        height: '60vh',
        width: '70vh',
        border: "2px solid gray"
    }

    const center = {
        lat: 40.777384,
        lng: -73.9803
    }

    const [selected, setSelected] = useState({});

    const locations = [
        {
            id: 1,
            location: {
                lat: 40.777384,
                lng: -73.9803
            },
        },
        {
            id: 2,
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
            zoom={7}
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