import { combineReducers } from "redux";
import homesReducer from "./homes_reducer";
import users from './users_reducer';

const entitiesReducer = combineReducers({
    homes: homesReducer,
    users,
});

export default entitiesReducer;
