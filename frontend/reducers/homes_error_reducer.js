import {
    RECEIVE_HOME_ERRORS,
} from '../actions/home_action'

const homeErrorReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_HOME_ERRORS:
            let homeErrors = {}
            action.errors.forEach(err => {
                let key = err.split(' ')[0].toLowerCase();
                homeErrors[key] = err
            })
            return {'error': homeErrors}
        default: 
            return state
    }
}

export default homeErrorReducer