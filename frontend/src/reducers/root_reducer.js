import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";


const rootReducer = combineReducers({
    entities: entitiesReducer,    
    session: sessionReducer,
    errors: errorsReducer,

})

export default rootReducer