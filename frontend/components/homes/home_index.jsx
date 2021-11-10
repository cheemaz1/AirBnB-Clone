import React from "react";
import HomeIndexItem from "./home_index_item";
import HomeMap from "../map/home_map";



class HomeIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { noHome: false };
    }

    componentDidMount() {
        this.props.fetchHomes({ city: this.props.match.params.city })
            .then(homes => {
                if (Object.values(homes.homes).length === 0) {
                    this.setState({ nohome: true });
                }
            });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.city !== this.props.match.params.city) {

            this.props
                .fetchHomes({
                    city: this.props.match.params.city,
                })
                .then(homes => {
                    if (Object.values(homes.homes).length === 0) {
                        this.setState({ noHome: true });
                    } else {
                        this.setState({ noHome: false });
                    }
                });
        }
    }

    render() {
        if (this.props.homes.length === 0 && !this.state.noHome) return null;

        if (this.state.noHome) {
            return (
                <div className="no-homes-container">
                    <div className="no-homes">
                        <p className="no-homes-text"> No Homes Available Here</p>{" "}
                        <span className="no-homes-sad-face">
        
                        </span>{" "}
                    </div>
                </div>
            );
        }

        let filteredHomes;
        let mappedHomes;
        if (this.props.match.params.city) {
            filteredHomes = this.props.homes.filter(
                home => home.city === this.props.match.params.city
            );
            mappedHomes = filteredHomes.map((home, i) => (
                // <HomeIndexItem key={`${home.title}${i}`} home={home} />
                <HomeIndexItem home={home} key={home.id} />
            ));
        } else {
            mappedHomes = this.props.homes.map((home, i) => (
                // <HomeIndexItem key={`${home.title}${i}`} home={home} />
                <HomeIndexItem home={home} key={home.id} />
            ));
        }
        // debugger;
        return (
            // <div className="homes-index-container">
            //     <div className="homes">{mappedHomes}</div>
            //     <div className="homes-right">
            //         <div className="google-map">
            //             <HomeMap homes={this.props.homes} />
            //         </div>
            //     </div>
            // </div>
            <div className="homes-div">
                <div className="homes-left">
                    <ul className="homes-list">{mappedHomes}</ul>
                </div>
                <div className="homes-right">
                    <div className="google-map">
                        <HomeMap homes={this.props.homes} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeIndex;
