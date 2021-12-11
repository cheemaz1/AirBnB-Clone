import {combineReducers} from 'redux'
import sessionReducer from './session_reducer'
import entitiesReducers from './entities_reducer'
import errorsReducer from './errors_reducer'
import uiReducer from './ui_reducer'


const RootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducers,
    errors: errorsReducer,
    ui: uiReducer
})

export default RootReducer