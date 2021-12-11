import React from 'react';
import ReactDOM from 'react-dom';

class HomeMap extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.home){
    const { home } = this.props

    const mapOptions = {
      center: { lat: home.ltd, lng: home.lng },
      zoom: 15,
      mapTypeId: 'terrain',
    };


    this.map = new google.maps.Map(this.mapNode, mapOptions);


    new google.maps.Marker({
      position: new google.maps.LatLng(home.ltd, home.lng),
      map: this.map,
      animation: google.maps.Animation.DROP,
    })
    }
  }

  
    render() {
    
      return (
        <div id='map-container' ref={ map => this.mapNode = map }></div>
      )
    }
  
}

export default HomeMap