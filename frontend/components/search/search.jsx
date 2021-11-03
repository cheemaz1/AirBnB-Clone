import React from "react";
import { withRouter } from "react-router-dom";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { info: "" };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
            let newSearch = this.state.info.split(" "); //
    let currentSearch = [];
    newSearch.forEach((ele) =>
      currentSearch.push(ele[0].toUpperCase() + ele.slice(1).toLowerCase())
    );
    this.state.info = currentSearch.join(" ");
    this.props.requireSearch(this.state);
    this.props.history.push("/search");
    this.setState({ info: "" });
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
                        onChange={this.update("info")} // "query"; home aka "splash page"
                        value={this.state.info}
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
