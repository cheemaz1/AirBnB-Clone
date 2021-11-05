import React from "react";
import HomeIndexItem from "./home_index_item";
// import HomeMap from "../map/home_map";

class HomeIndex extends React.Component {
    constructor(props) {
        super(props);
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
        
        return (
            <div className="homes-div">
                <div className="homes-left">
                    <ul className="homes-list">{this.homesIndex()}</ul>
                </div>
                <div className="homes-right">
                    <div className="google-map">
                        {/* <HomeMap homes={this.props.homes} /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeIndex;
