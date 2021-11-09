import React from "react";
import { connect } from "react-redux";
import HomeIndex2 from "./home_index2";
import { fetchHome, fetchHomes } from "../../actions/home_action";
import { withRouter } from "react-router-dom";
// withRouter provides access to extra props such as match location and history;

const mapState = (state) => ({
    homes: Object.values(state.entities.homes),
});

const mapDispatch = (dispatch) => ({
    fetchHome: (homeId) => dispatch(fetchHome(homeId)),
    fetchHomes: (searchParams) => dispatch(fetchHomes(searchParams)),
});

export default withRouter(connect(mapState, mapDispatch)(HomeIndex2));