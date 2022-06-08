import { 
    RECEIVE_LISTING,
    RECEIVE_LISTINGS,
    DELETE_LISTING,
    UPDATE_LISTING,
    CREATE_NEW_LISTING
} from "../actions/listing_actions";


const listingReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    // let nextState = Object.assign({listings:{}}, oldState)
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case CREATE_NEW_LISTING:
            nextState[action.listing.data.id] = action.listing.data;
            return nextState;
            //this is because our make listing action in the listing_action has 
            //CREATE_NEW_LISTING instead of receive_Listing
        case RECEIVE_LISTINGS:
            nextState = action.listings
            return nextState
        case RECEIVE_LISTING:
            nextState[action.listing.id] = Object.assign({},action.listing)
            return nextState;
        case DELETE_LISTING:
            delete nextState[action.listingId]
            return nextState
        case UPDATE_LISTING:
            nextState[action.listing.id] = Object.assign({},action.listing)
            return nextState
        default: 
            return oldState
    }
}

export default listingReducer
