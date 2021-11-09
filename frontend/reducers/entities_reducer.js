import { combineReducers } from "redux";
import homesReducer from "./homes_reducer";
import users from './users_reducer';
// import searchReducer from "./search_reducer";

const entitiesReducer = combineReducers({
    homes: homesReducer,
    // search: searchReducer,
    users,
});

export default entitiesReducer;
