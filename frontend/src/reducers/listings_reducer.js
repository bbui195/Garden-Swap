import { 
    CREATE_NEW_LISTING,
    RECEIVE_LISTING,
    RECEIVE_LISTINGS,
    DELETE_LISTING,
    UPDATE_LISTING
} from "../actions/listing_actions";


const listingReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({listings:{}}, oldState)
    switch (action.type) {
        case CREATE_NEW_LISTING:

        case RECEIVE_LISTINGS:
            nextState.listings = action.listings
            return nextState
        case RECEIVE_LISTING:
            nextState.listings[action.listing.id]= Object.assign({},action.listing)
        case DELETE_LISTING:
            delete nextState.listings[action.listing.id]
            return nextState
        case UPDATE_LISTING:
            nextState[action.listing.id] = Object.assign({},action.listing)
            return nextState
        default: 
            return oldState
    }
}

export default listingReducer