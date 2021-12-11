import React from 'react';
import MarkerManager from '../../util/market_manager';

class HomeIndexMap extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    const {changeMap, homes} = this.props
    const mapOptions = {
      center: { lat: changeMap.coords[0], lng: changeMap.coords[1]},
      zoom: changeMap.zoom,
      mapTypeId: 'terrain'
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.homes);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.homes);
  }

  render() {
    const {homes} = this.props
    return (
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    )
  }
}

export default HomeIndexMap

