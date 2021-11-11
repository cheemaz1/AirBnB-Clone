// import React from "react";
// import MarkerManager from "../../util/marker_manager";
// import { withGoogleMap, GoogleMap, Marker } from '@react-google-maps/api';
// // import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';



// class SingleHomeMap extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         const mapOptions = {
//             center: { lat: 41.3851, lng: 2.1734 },
//             zoom: 11,
//         };
        
        
//         // const locations = [
//         //     {
//         //         name: "Location 1",
//         //         location: {
//         //             lat: 41.3954,
//         //             lng: 2.162
//         //         },
//         //     },
//         //     {
//         //         name: "Location 2",
//         //         location: {
//         //             lat: 41.3917,
//         //             lng: 2.1649
//         //         },
//         //     },
//         //     {
//         //         name: "Location 3",
//         //         location: {
//         //             lat: 41.3773,
//         //             lng: 2.1585
//         //         },
//         //     },
//         //     {
//         //         name: "Location 4",
//         //         location: {
//         //             lat: 41.3797,
//         //             lng: 2.1682
//         //         },
//         //     },
//         //     {
//         //         name: "Location 5",
//         //         location: {
//         //             lat: 41.4055,
//         //             lng: 2.1915
//         //         },
//         //     }
//         // ];
//         this.map = new google.maps.Map(this.mapNode, mapOptions);
//         this.MarkerManager = new MarkerManager(this.map);
//     }


//     render() {
//         const GoogleMapSample = withGoogleMap((props) => (
//             <GoogleMap
//                 defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
//                 defaultZoom={12}
//             >
//                 <Marker
//                     key={spot.id}
//                     position={{ lat: this.props.lat, lng: this.props.lng }}
//                     defaultAnimation={google.maps.Animation.DROP}
//                 />
//             </GoogleMap>
//         ));

//         return typeof spot !== "undefined" ? (
//             <GoogleMapSample
//                 containerElement={
//                     <div
//                         style={{ height: "400px", width: "100%", marginBottom: "2vh" }}
//                     />
//                 }
//                 mapElement={<div style={{ height: "100%" }} />}
//             />
//         ) : null;

//         // return (
//         //     // this.props.refs.map
//         //     //  map === div tag
//         //     // ref is used for when we need to directly access DOM from React
//         //     <div
//         //         className="show-google-map"
//         //         ref={(map) => (this.mapNode = map)}
//         //     ></div>
//         // );
//     }
// }

// export default SingleHomeMap;
