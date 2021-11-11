import React from "react";
// import SingleHomeMap from "../../map/home_show_map";
import MapContainer from "../../map/map_container";
import ReviewContainer from "../../review/review_container";

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
        // debugger; 
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
                        <h2 className="titlehome">{home.home_name}</h2>
                    </div>
                    <div className="home-show-rating">
                        <div className="star">
                            <i className="fas fa-star"></i>
                            {randomRating}
                        </div>
                        <div className="home-city">{home.city}</div>
                    </div>
                    <div className="home-top-pics">
                        <div className="home-side-pic">
                            <img src={"https://aa-homes-dev.s3.ca-central-1.amazonaws.com/living.jpeg"} className="home-first-pic" />
                        </div>
                        </div>
                    <div className="home-bottom-pics">
                        <div className="home-side-pic">
                            <img src={"https://aa-homes-dev.s3.ca-central-1.amazonaws.com/kitchen.jpg"} className="home-show-pic" />
                        </div>
                        <div className="home-side-pic">
                            <img src={"https://aa-homes-dev.s3.ca-central-1.amazonaws.com/bath.jpg"} className="home-show-pic" />
                        </div>
                       
                        <div className="home-side-pic">
                            <img src={"https://aa-homes-dev.s3.ca-central-1.amazonaws.com/bed1.jpg"} className="home-show-pic" />
                        </div>
                        <div className="home-side-pic">
                            <img src={"https://aa-homes-dev.s3.ca-central-1.amazonaws.com/stairs.jpg"} className="home-show-pic" />
                        </div>
                    </div>
                </div>

                <div className="home-show-desc">
                    <h2 className="textinfos">Description</h2>
                    <p className="home-show-desc-p">{home.description}</p>
                </div>

                <div className="home-show-info">
                    <h2 className="textinfos">Where you'll sleep</h2>

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
                    <h2 className="textinfos">What this place offers</h2>
                    <div className="amenities">
                        <div className="amenities-1">
                            <div>
                                <i className="fas fa-wifi"></i>Wifi
                            </div>
                            <div>
                                <i className="fas fa-car"></i>Free parking
                            </div>
                            <div>
                                <i class="fas fa-tv"></i>TV
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
                                <i className="fas fa-utensils"></i>Kitchen
                            </div>
                            <div>
                                <i className="fas fa-swimmer"></i>Pool
                            </div>
                            <div>
                                <i className="fas fa-fan"></i>Air conditioning
                            </div>
                            <div>
                                <i className="fas fa-bell"></i>Smoke alarm
                            </div>
                            <div>
                                <i className="fas fa-glass-martini"></i>Bar
                            </div>
                        </div>
                    </div>
                </div>
                <div className="create-review">
                    <ReviewContainer home={this.props.home} />
                </div>
                <div className="show-map">
                    <h2 className="textinfos">Location</h2>
                    {/* <SingleHomeMap /> */}
                    <MapContainer />
                </div>
            </div>
        ) : null;
    }
}

export default Home;


//  <script type="text/javascript">dallas = "<%= image_url('dallas.jpg') %>"</script>
//     <script type="text/javascript">houston = "<%= image_url('houston.jpg') %>"</script>
//     <script type="text/javascript">nj = "<%= image_url('nj.jpg') %>"</script>
//     <script type="text/javascript">nyc = "<%= image_url('nyc.jpg') %>"</script>
//     <script type="text/javascript">sanfran = "<%= image_url('sanfran.jpg') %>"</script>
//     <script type="text/javascript">toronto = "<%= image_url('toronto.jpg') %>"</script>
//     <script type="text/javascript">vancouver = "<%= image_url('vancouver.jpg') %>"</script>
//     <script type="text/javascript">chicago = "<%= image_url('chicago.jpg') %>"</script>
//     <script type="text/javascript">try_hosting = "<%= image_url('try_hosting.jpg') %>"</script>
//     <script type="text/javascript">left = "<%= image_url('left.png') %>"</script>
//     <script type="text/javascript">living = "<%= image_url('living.jpeg') %>"</script>
//     <script type="text/javascript">kitchen = "<%= image_url('kitchen.jpg') %>"</script>
//     <script type="text/javascript">bath = "<%= image_url('bath.jpg') %>"</script>
//     <script type="text/javascript">bed1 = "<%= image_url('bed1.jpg') %>"</script>
//     <script type="text/javascript">stairs = "<%= image_url('stairs.jpg') %>"</script>