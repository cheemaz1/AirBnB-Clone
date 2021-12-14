import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    let createListingButton;
    if (this.props.currentUserId) {
      createListingButton = (
        <li
          className="create-listing-li"
          onClick={() => this.props.openModal("create listing")}
        >
          Learn More 
        </li>
      );
    } else {
      createListingButton = (
        <li
          className="create-listing-li"
          onClick={() => this.props.openModal("login")}
        >
          Learn More
        </li>
      );
    }

    return (
      <>
        <div className="splash-container">
          <div>
            <div className="bg-img-container">
              <img className="bg-img" src={splash_bg} alt="Splash BG" />

              <div className="flexible-container">
                <div className="flexible-text-container">
                  <p className="flexible-text">Not sure where to go?</p>
                </div>
                <div className="flexible-button-container">
                  <Link className="flexible-button" to="/listings">
                    I'm flexible
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-container-container">
            <div className="explore-h3-container">
              <h3 className="explore-h3">Explore Places To Stay</h3>
            </div>
            <div className="explore-container">
              <div className="explore-location">
                <Link
                  to={`/listings/New York`}
                  className="explore-location-text"
                >
                  <img
                    className="location-img"
                    src='https://aa-homes-dev.s3.ca-central-1.amazonaws.com/nyc.jpg'
                    alt="Location img"
                  />
                  New York
                </Link>
              </div>
              <div className="explore-location">
                <Link
                  to={`/listings/Vancouver`}
                  className="explore-location-text"
                >
                  <img
                    className="location-img"
                    src='https://aa-homes-dev.s3.ca-central-1.amazonaws.com/vancouver.jpg'
                    alt="Location img"
                  />
                  Vancouver
                </Link>
              </div>
              <div className="explore-location">
                <Link
                  to={`/listings/Chicago`}
                  className="explore-location-text"
                >
                  <img
                    className="location-img"
                    src='https://aa-homes-dev.s3.ca-central-1.amazonaws.com/chicago.jpg'
                    alt="Location img"
                  />
                  Chicago
                </Link>
              </div>
              <div className="explore-location">
                <Link
                  to={`/listings/Toronto`}
                  className="explore-location-text"
                >
                  <img
                    className="location-img"
                    src='https://aa-homes-dev.s3.ca-central-1.amazonaws.com/toronto.jpg'
                    alt="Location img"
                  />
                  Toronto
                </Link>
              </div>
            </div>
          </div>
          <div className="try-hosting-container-container">
            <div className="try-hosting-container">
              <div className="try-hosting-img-container">
                <img
                  className="try-hosting-img"
                  src={try_hosting}
                  alt="Location img"
                />
              </div>

              <div className="try-hosting-text-container">
                <h3 className="try-hosting-h3">Try Hosting</h3>
                <p className="try-hosting-text">
                  Earn extra income and unlock new opportunities by sharing your
                  space
                </p>
                {createListingButton}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Splash;
