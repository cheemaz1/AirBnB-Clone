import React from "react";

const ListingPhotos = ({ photos }) => (
  <div className="photos-container">
    <div className="main-photo-container">
      <img className="main-photo" alt='Listing Photo' src={photos[0]} height="500" width="600" />
    </div>
    <div className="secondary-photos-container">
      <div className="secondary-photos-top-container">
        <img src={photos[1]} height="245" width="250" alt='Listing Photo' />
        <img
          className="secondary-photo-top"
          alt='Listing Photo'
          src={photos[2]}
          height="245"
          width="250"
        />
      </div>
      <div className="secondary-photos-bottom-container">
        <img src={photos[3]} height="245" width="250" alt='Listing Photo' />
        <img
          className="secondary-photo-bottom"
          alt='Listing Photo'
          src={photos[4]}
          height="245"
          width="250"
        />
      </div>
    </div>
  </div>
);

export default ListingPhotos;
