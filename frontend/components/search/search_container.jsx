import { connect } from "react-redux";
import { fetchHomes } from "../../actions/home_action";
import Search from "./search";

const mapState = (state, ownProps) => ({
    homes: Object.values(state.entities.homes),
    // scity 
});

const mapDispatch = (dispatch) => {
    return {
        fetchHomes: (city) => dispatch(fetchHomes(city)),
    };
};

// export default connect(mapState, mapDispatch)(Search);
export default connect(null, mapDispatch)(Search);
