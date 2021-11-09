import React from "react";
import { connect } from "react-redux";
import HomeIndex from "./home_index";
import { fetchHome, fetchHomes, searchHomes } from "../../actions/home_action";
import { withRouter } from "react-router-dom";
import search from "../search/search";

// withRouter provides access to extra props such as match location and history;

const mapState = (state) => ({
    homes: Object.values(state.entities.homes),
    // city 
});

const mapDispatch = (dispatch) => ({
    // fetchHome: (homeId) => dispatch(fetchHome(homeId)),
    fetchHomes: (searchParams) => dispatch(fetchHomes(searchParams)),
    // searchHomes: (searchParams) => dispatch(searchHomes(searchParams))
});

export default withRouter(connect(mapState, mapDispatch)(HomeIndex));
// export default connect(mapState, mapDispatch)(HomeIndex);