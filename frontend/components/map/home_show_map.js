import React from "react";
import MarkerManager from "../../util/marker_manager";
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";



class SingleHomeMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 40.777384, lng: -73.9803 },
            zoom: 11,
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
    }


    render() {
        // const GoogleMapSample = withGoogleMap((props) => (
        //     <GoogleMap
        //         defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
        //         defaultZoom={12}
        //     >
        //         <Marker
        //             key={spot.id}
        //             position={{ lat: this.props.lat, lng: this.props.lng }}
        //             defaultAnimation={google.maps.Animation.DROP}
        //         />
        //     </GoogleMap>
        // ));

        // return typeof spot !== "undefined" ? (
        //     <GoogleMapSample
        //         containerElement={
        //             <div
        //                 style={{ height: "400px", width: "100%", marginBottom: "2vh" }}
        //             />
        //         }
        //         mapElement={<div style={{ height: "100%" }} />}
        //     />
        // ) : null;

        return (
            // this.props.refs.map
            //  map === div tag
            // ref is used for when we need to directly access DOM from React
            <div
                className="show-google-map"
                ref={(map) => (this.mapNode = map)}
            ></div>
        );
    }
}

export default SingleHomeMap;
