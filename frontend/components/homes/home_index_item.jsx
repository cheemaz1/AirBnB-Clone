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
            "https://freshome.com/wp-content/uploads/2014/07/GettyImages-523468730.jpg",
            "https://archello.s3.eu-central-1.amazonaws.com/images/2019/01/07/Interior-Design-of-Luxury-Modern-Residence-6.1546900319.0638.jpg",
            "https://cdn.vox-cdn.com/thumbor/teCEQIxlj9RbCj6P_vlwMopAptQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11545893/House_Calls_Brooklyn_Zames_Williams_living_room_2_Matthew_Williams.jpg",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/old-brand-new-living-space-1549664823.jpeg",
            "https://d2kq0urxkarztv.cloudfront.net/55a5b979cc51ef6d1b282884/866586/upload-84d101d0-a6de-11e7-abe1-2ff7d01b5299.jpg?e=webp",
            "https://images.squarespace-cdn.com/content/v1/56a3e94b40667aa56dc72aeb/1555964463743-TFTMO56BH0W65MM5F01B/ke17ZwdGBToddI8pDm48kOggE0Ch6pMGalwtLMqzsSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufo5RWkg_J4of0jUNHaDHx6pZKBvpVYzidBWCapg0tuoMuEaB2HPGSYDV-11UTcW2g/Why+AirBnb+Could+be+Your+New+Interior+Design+or+Home+Staging+Niche",
            "https://airbnb.design/wp-content/uploads/2018/08/plus-living-room.jpg",
            "https://a0.muscache.com/im/pictures/7072a12d-9657-431b-a10b-a1306aa3bcf3.jpg?im_w=960",
        ][Math.floor(Math.random() * 8)];
        let randN = [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)];
        let { home_name, price } = this.props.home;

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
