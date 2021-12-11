import {
    RECEIVE_REVIEW_ERRORS,
} from '../actions/review_action'

const reviewErrorReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_REVIEW_ERRORS:
            let reviewErrors = {}
            action.errors.forEach(err => {
                let key = err.split(' ')[0].toLowerCase();
                reviewErrors[key] = err
            })
            return {'error': reviewErrors}
        default: 
            return state
    }
}

export default reviewErrorReducer