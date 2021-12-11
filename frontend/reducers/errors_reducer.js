import {combineReducers} from 'redux'
import sessionErrorReducer from './sessions_errors_reducers'
import homeErrorReducer from './homes_error_reducer'
import reviewErrorReducer from './review_error_reducer'

const errorsReducer = combineReducers({
    session: sessionErrorReducer,
    home: homeErrorReducer,
    review: reviewErrorReducer
})

export default errorsReducer