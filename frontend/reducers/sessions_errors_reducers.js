import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions'

const sessionErrorReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_SESSION_ERRORS:
            let sessionErrors = {}
            action.errors.forEach(err => {
                let key = err.split(' ')[0].toLowerCase();
                sessionErrors[key] = err
            })
            return { "session" : sessionErrors }
            // return Object.assign({}, action.errors)
        case RECEIVE_CURRENT_USER:
            return {}
        default:
            return state
    }    
}

export default sessionErrorReducer

