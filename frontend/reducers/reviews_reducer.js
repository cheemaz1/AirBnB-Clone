import {
    RECEIVE_HOME,
    RECEIVE_REVIEW,
    RECEIVE_REVIEWS,
} from "../actions/home_action";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_HOME:
            return Object.assign({}, state, action.reviews);
        case RECEIVE_REVIEW:
            return Object.assign({}, state, { [action.review.id]: action.review });
        case RECEIVE_REVIEWS:
            return action.reviews;
        default:
            return state;
    }
};

export default reviewsReducer;
