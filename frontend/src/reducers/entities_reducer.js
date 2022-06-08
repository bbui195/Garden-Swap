import { combineReducers } from "redux";
import usersReducer from "./user_reducer";
import listingReducer from "./listings_reducer";
import reviewReducer from "./review_reducer";
import messagesReducer from "./messages_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    listings: listingReducer,
    reviews: reviewReducer,
    messages: messagesReducer
})

export default entitiesReducer