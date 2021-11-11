
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import MarkerManager from '../../util/marker_manager';

class HomeMap extends React.Component {
    constructor(props) {
        super(props);
        this.locations = [
            {
                name: 'Listing 1',
                location: {
                    lat: 40.6892,
                    lng: -74.0445
                }
            }
        ];
    }

    componentDidMount() {
        const mapOptions = {
            center: {
                lat: 40.6892,
                lng: -74.0445
            },
            zoom: 11
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions)
    }

    render() {
        // debugger
        return (
            <div className='g-map' ref={map => this.mapNode = map}>
                {this.locations.map(item => {
                    <Marker key={item.name} postion={item.location} />
                })}
            </div>
        )
    }
}

export default HomeMap
