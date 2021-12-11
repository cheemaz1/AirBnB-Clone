import {RECEIVE_HOME, RECEIVE_HOMES, REMOVE_HOME} from '../actions/home_action'
import { RECEIVE_REVIEWS } from '../actions/review_action';


const homesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_HOMES:
            return action.homes
        case RECEIVE_HOME:
            const newHome = { [action.home.id]: action.home }
            return Object.assign({}, state, newHome);
        case REMOVE_HOME:
            let newState = Object.assign({}, state)
            delete newState[action.homeId]
            return newState
        default: 
            return state
    }
}

export default homesReducer