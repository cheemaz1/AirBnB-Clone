import React from "react";
import { connect } from "react-redux";
import HomeIndex from "./home_index";
import { fetchHome, fetchHomes } from "../../actions/home_action";
import { withRouter } from "react-router-dom";
// withRouter provides access to extra props such as match location and history;

const mapState = (state) => ({
    homes: Object.values(state.entities.homes),
    // scity 
});

const mapDispatch = (dispatch) => ({
    fetchHome: (homeId) => dispatch(fetchHome(homeId)),
    fetchHomes: () => dispatch(fetchHomes()),
});

export default withRouter(connect(mapState, mapDispatch)(HomeIndex));
