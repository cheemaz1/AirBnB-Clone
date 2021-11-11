import React from "react";
import HomeIndexItem from "./home_index_item";
import HomeMap from "../map/home_map";
import MapContainer from "../map/map_container";
import MapDisplay from "../map/map_display";


class HomeIndex2 extends React.Component {
    constructor(props) {
        super(props);
        debugger;
    }

    componentDidMount() {
        this.props.fetchHomes();
    }

    homesIndex() {

        const homes = this.props.homes.map((home) => (
            <HomeIndexItem home={home} key={home.id} />
        ));
        return homes;
    }

    render() {
        // debugger;
        return (
            <div className="homes-div">
                <div className="homes-left">
                    <ul className="homes-list">{this.homesIndex()}</ul>
                </div>
                <div className="homes-right">
                    <div className="google-map">
                        {/* <HomeMap homes={this.props.homes} /> */}
                        {/* <MapDisplay query={this.props.query}
                            homes={this.props.homes}
                            history={this.props.history}
                        /> */}
                   
                        <MapContainer homes={this.props.homes} props={this.props} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeIndex2;