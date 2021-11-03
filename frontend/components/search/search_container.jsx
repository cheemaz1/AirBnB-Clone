import { connect } from "react-redux";
import { requireSearch } from "../../actions/search_action";
import Search from "./search";

const mapDispatch = (dispatch) => {
    return {
        requireSearch: (info) => dispatch(requireSearch(info)),
    };
};

export default connect(null, mapDispatch)(Search);
