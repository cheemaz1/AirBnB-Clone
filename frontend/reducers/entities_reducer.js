import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import homesReducer from './homes_reducer';
import reviewsReducer from './reviews_reducer'
import bookingsReducer from './bookings_reducer'

const entitiesReducers = combineReducers({
    reviews: reviewsReducer,
    users: usersReducer,
    homes: homesReducer,
    bookings: bookingsReducer,
})

export default entitiesReducers