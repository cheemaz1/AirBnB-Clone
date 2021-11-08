import * as APIUtil from "../util/home_api_util";
export const RECEIVE_HOMES = "RECEIVE_HOMES";
export const REQUIRE_SEARCH = "REQUIRE_SEARCH";

export const requireSearch = (scity) => ({
    type: REQUIRE_SEARCH,
    scity,
});

export const receiveHomes = (homes) => {
    // debugger
    return {
        type: RECEIVE_HOMES,
        homes,
    };
};



export const searchHomes = () => (dispatch) =>
    APIUtil.searchHomes(query).then((homes) => {
        return dispatch(receiveHomes(homes));
    });
