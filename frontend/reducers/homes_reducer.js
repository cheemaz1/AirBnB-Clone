import { RECEIVE_HOMES, RECEIVE_HOME } from "../actions/home_action";

const homesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_HOMES:
            return Object.assign({}, state, action.homes);
            // return { ...state, ...action.homes };
        case RECEIVE_HOME:
            return Object.assign({}, state, { [action.home.id]: action.home });
        default:
            return state;
    }
};

export default homesReducer;



// import {
//     RECEIVE_LISTINGS,
//     RECEIVE_LISTING,
//     REMOVE_LISTING,
// } from "../actions/listings_actions";

// const listingsReducer = (state = {}, action) => {
//     Object.freeze(state);

//     switch (action.type) {
//         case RECEIVE_LISTING:
//             return { ...state, [action.listing.id]: action.listing };
//         case RECEIVE_LISTINGS:
//             return { ...state, ...action.listings };
//         case REMOVE_LISTING:
//             let newState = { ...state };
//             delete newState[action.listingId];
//             return newState;
//         default:
//             return state;
//     }
// };

// export default listingsReducer;