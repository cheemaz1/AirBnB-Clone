import { combineReducers } from "redux";
import homesReducer from "./homes_reducer";
import users from './users_reducer';
// import searchReducer from "./search_reducer";
import reviewsReducer from "./reviews_reducer";

const entitiesReducer = combineReducers({
    homes: homesReducer,
    // search: searchReducer,
    reviews: reviewsReducer,
    users,
});

export default entitiesReducer;
