import { combineReducers } from "redux";
import homesReducer from "./homes_reducer";
import users from './users_reducer';
// import searchReducer from "./search_reducer";
import reviewsReducer from "./reviews_reducer";
import bookingsReducer from "./bookings_reducer";

const entitiesReducer = combineReducers({
    homes: homesReducer,
    // search: searchReducer,
    bookings: bookingsReducer,
    reviews: reviewsReducer,
    users,
});

export default entitiesReducer;
