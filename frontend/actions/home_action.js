import * as APIUtil from "../util/home_api_util";

export const RECEIVE_HOMES = "RECEIVE_HOMES";
export const RECEIVE_HOME = "RECEIVE_HOME";


export const receiveHomes = (homes) => {
    // debugger
    return {
        type: RECEIVE_HOMES,
        homes,
    };
};

export const receiveHome = (home) => {
    return {
        type: RECEIVE_HOME,
        home,
    };
};


export const fetchHomes = () => (dispatch) =>
APIUtil.fetchHomes().then((homes) => {
    return dispatch(receiveHomes(homes));
});

export const fetchHome = (homeId) => (dispatch) =>
APIUtil.fetchHome(homeId).then((home) => {
    return dispatch(receiveHome(home));
});

export const createHome = (home) => (dispatch) =>
APIUtil.createHome(home).then((home) => dispatch(receiveHome(home)));

export const updateHome = (home) => (dispatch) =>
APIUtil.updateHome(home).then((home) => dispatch(receiveHome(home)));

// export const createReview = (review) => (dispatch) =>
//     APIUtil.createReview(review).then(
    //         (review) => dispatch(receiveReview(review)),
    //         (error) => dispatch(receiveReviewErrors(error.responseJSON))
    //     );
    
    // export const fetchReviews = (spotId) => (dispatch) =>
    //     APIUtil.fetchReviews(spotId).then((reviews) =>
    //         dispatch(receiveReviews(reviews))
    //     );
    
    // export const receiveReview = (review) => {
    //     return {
    //         type: RECEIVE_REVIEW,
    //         review,
    //     };
    // };
    
    // export const receiveReviews = (reviews) => {
    //     return {
    //         type: RECEIVE_REVIEWS,
    //         reviews,
    //     };
    // };