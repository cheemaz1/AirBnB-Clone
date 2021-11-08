import React from "react";
import { withRouter } from "react-router-dom";
import homesReducer from "../../reducers/homes_reducer";
import home_index_container from "../homes/home_index_container";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { scity: "" };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log("hello")
        console.log(this.state);
        // console.log(homes);
        debugger;
            let newSearch = this.state.scity.split(" "); //
        let currentSearch = [];
        newSearch.forEach((ele) =>
        currentSearch.push(ele[0].toUpperCase() + ele.slice(1).toLowerCase())
        );
        this.state.scity = currentSearch.join(" ");
        debugger;
        this.props.requireSearch(this.state);
        // homes.
        console.log("props")
        console.log(this.props)
        this.props.history.push(`/search`) //homes/${this.state.scity}`, { city: this.state.scity });
        
            // <HomeIndex city={scity} />
        debugger;
        this.setState({ scity: "" });
        debugger;
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
            <form className="search-box" onSubmit={this.handleClick}>
                <div className="search-div">
                    <label className="location">Location</label>
                    <input
                        type="text"
                        className="search"
                        placeholder="Where are you going?"
                        onChange={this.update("scity")} // "query"; home aka "splash page"
                        value={this.state.scity}
                    />
                    <button className="search-button" onClick={this.handleClick}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
        );
    }
}

export default withRouter(Search);
