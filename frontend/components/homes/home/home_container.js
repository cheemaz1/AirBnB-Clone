import { connect } from "react-redux";
import {
    fetchHome,
    createHome,
    updateHome,
} from "../../../actions/home_action";
import Home from "./home";

const mapState = (state, ownProps) => ({
    home: state.entities.homes[ownProps.match.params.homeId],
    // state has to be normalized cf. home_reducer;
});

const mapDispatch = (dispatch) => ({
    createHome: (home) => dispatch(createHome(home)),
    updateHome: (home) => dispatch(updateHome(home)),
    fetchHome: (homeId) => dispatch(fetchHome(homeId)),
});

export default connect(mapState, mapDispatch)(Home);
