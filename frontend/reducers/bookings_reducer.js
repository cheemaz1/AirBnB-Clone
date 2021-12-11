import {RECEIVE_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING} from '../actions/booking_action'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_BOOKINGS:
            return action.bookings;
        case RECEIVE_BOOKING:
            newState[action.booking.id] = action.booking
            return newState
        case REMOVE_BOOKING: 
            delete newState[action.bookingId.id]
            return newState
        case RECEIVE_CURRENT_USER: 
            return action.currentUser.bookings || {};
        default: 
            return state
    }
}

export default bookingsReducer;