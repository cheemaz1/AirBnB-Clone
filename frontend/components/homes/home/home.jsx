import React from "react";
import SingleHomeMap from "../../map/home_show_map";
// import ReviewContainer from "../../review/review_container";

class Home extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {

        // }
    }

    componentDidMount() {
        this.props.fetchHome(this.props.match.params.homeId);
    }

    render() {
        let randomRating = [5.0, 4.67, 4.3, 4.88, 3.7, 4.8, 4.9, 3.8, 4.6, 4.75][
            Math.floor(Math.random() * 10)
        ];
        const { home } = this.props;
        debugger; 
        // const {
        //   home_name,
        //   description,
        //   address,
        //   price,
        //   lat,
        //   lng,
        //   city,
        // } = this.props.home;
        // debugger;
        return home ? (
            <div className="home-show-container">
                <div className="home-top">
                    <div className="home-show-name">
                        <h2>{home.home_name}</h2>
                    </div>
                    <div className="home-show-rating">
                        <div className="star">
                            <i className="fas fa-star"></i>
                            {randomRating}
                        </div>
                        <div className="home-city">{home.city}</div>
                    </div>
                </div>

                <div className="home-show-desc">
                    <h2>Description</h2>
                    <p className="home-show-desc-p">{home.description}</p>
                </div>

                <div className="home-show-info">
                    <h2>Sleeping arrangement</h2>

                    <div className="home-show-info-container">
                        <div className="home-bedroom">
                            <i className="fas fa-bed"></i>
                            <br />
                            <span>Bedroom 1</span>
                            <br />
                            <p>1 king bed</p>
                        </div>
                        <div className="home-common">
                            <i className="fas fa-couch"></i>
                            <br />
                            <span>Common spaces</span>
                            <p>1 couch</p>
                        </div>
                    </div>
                </div>
                <div className="home-show-amenities">
                    <h2>Amenities</h2>
                    <div className="amenities">
                        <div className="amenities-1">
                            <div>
                                <i className="fas fa-wifi"></i>Wifi
                            </div>
                            <div>
                                <i className="fas fa-car"></i>Free parking
                            </div>
                            <div>
                                <i className="fas fa-amazon"></i>TV
                            </div>
                            <div>
                                <i className="fas fa-burn"></i>Heating
                            </div>
                            <div>
                                <i className="fas fa-fire-extinguisher"></i>Fire extinguisher
                            </div>
                        </div>
                        <div className="amenities-2">
                            <div>
                                <i className="fas fa-bell"></i>Kitchen
                            </div>
                            <div>
                                <i className="fas fa-bell"></i>Pool
                            </div>
                            <div>
                                <i className="fas fa-bell"></i>Air conditioning
                            </div>
                            <div>
                                <i className="fas fa-bell"></i>Smoke alarm
                            </div>
                            <div>
                                <i className="fas fa-bell"></i>Bar
                            </div>
                        </div>
                    </div>
                </div>
                <div className="create-review">
                    {/* <ReviewContainer home={this.props.home} /> */}
                </div>
                <div className="show-map">
                    <h2>Location</h2>
                    <SingleHomeMap />
                </div>
            </div>
        ) : null;
    }
}

export default Home;
