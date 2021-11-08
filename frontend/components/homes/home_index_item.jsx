import React from "react";
import { withRouter } from "react-router-dom";

class HomeIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push(`/homes/${this.props.home.id}`);
    }

    showHome() {
        let randomRating = [5.0, 4.67, 4.3, 4.88, 3.7, 4.8, 4.9, 3.8, 4.6, 4.75][
            Math.floor(Math.random() * 10)
        ];
        let randomHomeType = [
            "Entire Apartment",
            "Studio",
            "Private Room",
            "Shared Room",
            "Entire Cabin",
            "Farm Stay",
        ][Math.floor(Math.random() * 6)];
        let randomHomeImg = [

        ][Math.floor(Math.random() * 8)];
        let randN = [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)];
        let { home_name, price, city } = this.props.home;

        return (
            <div className="indiv-home">
                <div className="indiv-home-container">
                    <div className="indiv-home-photo">
                        <img src={randomHomeImg} className="indiv-photo-index" />
                    </div>

                    <div className="details">
                        <div className="inner-details">
                            <div className="home-type">{randomHomeType}</div>
                            <ul className="rating-home">
                                <li className="stars">
                                    <div className="star">
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <div>{randomRating}</div>
                                </li>
                            </ul>
                        </div>

                        <div className="home-name" onClick={this.handleClick}>
                            <h3>{home_name}</h3>
                        </div>
                        <div className="home-info">
                            <div className="home-basic-info">
                                {randN} guests • {randN} bedroom • {randN} beds • {randN} bath
                            </div>
                            <div className="home-basic-amenities">
                                Wifi • Air conditioning • Washer • Free parking • Kitchen
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-price">
                    <span>${price}</span>/night
                </div>
            </div>
        );
    }

    render() {
        
        return <div>{this.showHome()}</div>;
    }
}

export default withRouter(HomeIndexItem);
