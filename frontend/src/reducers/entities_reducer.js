import { combineReducers } from "redux";
import usersReducer from "./user_reducer";
import listingReducer from "./listings_reducer";
import reviewReducer from "./review_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    listings: listingReducer,
    reviews: reviewReducer,
})

export default entitiesReducer