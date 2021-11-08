import { connect } from "react-redux";
import { requireSearch } from "../../actions/search_action";
import Search from "./search";

const mapState = (state, ownProps) => ({
    homes: Object.values(state.entities.homes),
    // scity 
});

const mapDispatch = (dispatch) => {
    return {
        requireSearch: (scity) => dispatch(requireSearch(scity)),
    };
};

// export default connect(mapState, mapDispatch)(Search);
export default connect(null, mapDispatch)(Search);
