import { REQUIRE_SEARCH } from "../actions/search_action";

const searchReducer = (state ={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case REQUIRE_SEARCH:
            return Object.assign({}, state, action.scity)
        default:
            return state;
    }
};

export default searchReducer;
