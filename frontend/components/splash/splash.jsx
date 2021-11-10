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
                                    <a href={`#/search/Toronto`}><img className="location-img" src={"https://aa-homes-dev.s3.ca-central-1.amazonaws.com/toronto.jpg"} alt="Location img" /></a>
                                <Link
                                    to={`/search/Toronto`}
                                    className="explore-location-text"
                                >
                                    Toronto
                                </Link>
                                    <p>
                                        <span>$250</span>/night avg.
                                    </p>
                            </div>
                            <div className="explore-location">
                                    <a href={`#/search/Vancouver`}><img className="location-img" src={"https://aa-homes-dev.s3.ca-central-1.amazonaws.com/vancouver.jpg"} alt="Location img" /></a>
                                <Link
                                    to={`/search/Vancouver`}
                                    className="explore-location-text"
                                >
                                    Vancouver
                                </Link>
                                <p>
                                    <span>$300</span>/night avg.
                                </p>
                            </div>
                            <div className="explore-location">
                                    <a href={`#/search/Chicago`}><img className="location-img" src={"https://aa-homes-dev.s3.ca-central-1.amazonaws.com/chicago.jpg"} alt="Location img" /></a>
                                <Link
                                    to={`/search/Chicago`}
                                    className="explore-location-text"
                                >
                                    Chicago
                                </Link>
                                <p>
                                    <span>$180</span>/night avg.
                                </p>
                            </div>
                            <div className="explore-location">
                                    <a href={`#/search/New York`}><img className="location-img" src={"https://aa-homes-dev.s3.ca-central-1.amazonaws.com/nyc.jpg"} alt="Location img" /></a>
                                <Link to={`/search/New York`} className="explore-location-text">
                                    New York
                                </Link>
                                <p>
                                    <span>$250</span>/night avg.
                                </p>
                            </div>
                            </div>
                            <div className="frog-row">

                            <div className="explore-location">
                                    <a href={`#/search/New Jersey`}><img className="location-img" src={"https://aa-homes-dev.s3.ca-central-1.amazonaws.com/nj.jpg"} alt="Location img" /></a>
                                <Link
                                    to={`/search/New Jersey`}
                                    className="explore-location-text"
                                >
                                    New Jersey
                                </Link>
                                <p>
                                    <span>$130</span>/night avg.
                                </p>
                            </div>
                            <div className="explore-location">
                                    <a href={`#/search/San Francisco`}><img className="location-img" src={"https://aa-homes-dev.s3.ca-central-1.amazonaws.com/sanfran.jpg"} alt="Location img" /></a>
                                <Link
                                    to={`/search/San Francisco`}
                                    className="explore-location-text"
                                >
                                    San Francisco
                                </Link>
                                <p>
                                    <span>$250</span>/night avg.
                                </p>
                            </div>
                            <div className="explore-location">
                                    <a href={`#/search/Dallas`}><img className="location-img" src={"https://aa-homes-dev.s3.ca-central-1.amazonaws.com/dallas.jpg"} alt="Location img" /></a>
                                <Link
                                    to={`/search/Dallas`}
                                    className="explore-location-text"
                                >
                                    Dallas
                                </Link>
                                <p>
                                    <span>$180</span>/night avg.
                                </p>
                            </div>
                            <div className="explore-location">
                                    <a href={`#/search/Houston`}><img className="location-img" src={"https://aa-homes-dev.s3.ca-central-1.amazonaws.com/houston.jpg"} alt="Location img" /></a>
                                <Link to={`/search/Houston`} className="explore-location-text">
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
                                        <img className="try-hosting-img" src={"https://aa-homes-dev.s3.ca-central-1.amazonaws.com/try_hosting.jpg"} alt="Location img" />
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