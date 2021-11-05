import React from "react";
import { Link } from "react-router-dom";



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
                    Create Listing
                </li>
            );
        } else {
            createListingButton = (
                <li
                    className="create-listing-li"
                    onClick={() => this.props.openModal("login")}
                >
                    Create Listing
                </li>
            );
        }

        return (
            <>
                <div className="splash-container">
                    <div className="mainbg">
                        <img className="splashbg" src={window.bg} alt="BG" />
                        <div className="perfect">Not sure where to go? Perfect.</div>
                        <div><Link className="flex-button" to="/homes">I'm flexible</Link></div>
                        {/* <button class="button-17" role="button" onClick="/listings">I'm flexible</button> */}
                    </div>
                            
                    <div>
                        
                        <div className="explore-h3-container">
                            <h3 className="explore-h3">Explore Places To Stay</h3>
                        </div>
                        <div className="cities">
                                <div className="frog-row">
                            <div className="explore-location">
                                {/* <div className="img-row"> */}
                                    <a href={`#/homes/Toronto`}><img className="location-img" src={toronto} alt="Location img" /></a>
                                <Link
                                    to={`/homes/Toronto`}
                                    className="explore-location-text"
                                >
                                    Toronto
                                </Link>
                                    <p>
                                        <span>$250</span>/night avg.
                                    </p>
                            </div>
                            <div className="explore-location">
                                    <a href={`#/homes/Vancouver`}><img className="location-img" src={vancouver} alt="Location img" /></a>
                                <Link
                                    to={`/homes/Vancouver`}
                                    className="explore-location-text"
                                >
                                    Vancouver
                                </Link>
                                <p>
                                    <span>$300</span>/night avg.
                                </p>
                            </div>
                            <div className="explore-location">
                                    <a href={`#/homes/Chicago`}><img className="location-img" src={chicago} alt="Location img" /></a>
                                <Link
                                    to={`/homes/Chicago`}
                                    className="explore-location-text"
                                >
                                    Chicago
                                </Link>
                                <p>
                                    <span>$180</span>/night avg.
                                </p>
                            </div>
                            <div className="explore-location">
                                    <a href={`#/homes/New York`}><img className="location-img" src={nyc} alt="Location img" /></a>
                                <Link to={`/homes/New York`} className="explore-location-text">
                                    New York
                                </Link>
                                <p>
                                    <span>$250</span>/night avg.
                                </p>
                            </div>
                            </div>
                            <div className="frog-row">

                            <div className="explore-location">
                                    <a href={`#/homes/New Jersey`}><img className="location-img" src={nj} alt="Location img" /></a>
                                <Link
                                    to={`/homes/New Jersey`}
                                    className="explore-location-text"
                                >
                                    New Jersey
                                </Link>
                                <p>
                                    <span>$130</span>/night avg.
                                </p>
                            </div>
                            <div className="explore-location">
                                    <a href={`#/homes/San Francisco`}><img className="location-img" src={sanfran} alt="Location img" /></a>
                                <Link
                                    to={`/homes/San Francisco`}
                                    className="explore-location-text"
                                >
                                    San Francisco
                                </Link>
                                <p>
                                    <span>$250</span>/night avg.
                                </p>
                            </div>
                            <div className="explore-location">
                                    <a href={`#/homes/Dallas`}><img className="location-img" src={dallas} alt="Location img" /></a>
                                <Link
                                    to={`/homes/Dallas`}
                                    className="explore-location-text"
                                >
                                    Dallas
                                </Link>
                                <p>
                                    <span>$180</span>/night avg.
                                </p>
                            </div>
                            <div className="explore-location">
                                    <a href={`#/homes/Houston`}><img className="location-img" src={houston} alt="Location img" /></a>
                                <Link to={`/homes/Houston`} className="explore-location-text">
                                    Houston
                                </Link>
                                <p>
                                    <span>$140</span>/night avg.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    
                    </div>
                    

                    
                    
                    <div>
                        <div>
                            
                        

                            
                            <div className="try-hosting-container-container">
                                <div className="try-hosting-container">
                                    <div className="try-hosting-img-container">
                                        <img className="try-hosting-img" src={try_hosting} alt="Location img" />
                                    </div>

                                    <div className="try-hosting-text-container">
                                        <h3 className="try-hosting-h3">Try Hosting</h3>
                                        <p className="try-hosting-text">
                                            Earn extra income and unlock new opportunities by sharing your
                                            space
                                        </p>
                                        <p className="learnmore">Learn More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Splash;