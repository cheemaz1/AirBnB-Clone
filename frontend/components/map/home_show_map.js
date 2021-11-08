import React from "react";




class SingleSpotMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 40.777384, lng: -73.9803 },
            zoom: 11,
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render() {
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

export default SingleSpotMap;
