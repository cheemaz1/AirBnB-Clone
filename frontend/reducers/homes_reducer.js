import { RECEIVE_HOMES, RECEIVE_HOME, REQUIRE_SEARCH } from "../actions/home_action";

const homesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_HOMES:
            return Object.assign({}, state, action.homes);
        case RECEIVE_HOME:
            return Object.assign({}, state, { [action.home.id]: action.home });
        default:
            return state;
    }
};

export default homesReducer;


