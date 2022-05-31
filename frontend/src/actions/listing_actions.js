import * as listingApiUtils  from '../utils/listing_utils/'


export const CREATE_NEW_LISTING = 'CREATE_NEW_LISTING'
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS'
export const RECEIVE_LISTING = 'RECEIVE_LISTING' 
export const DELETE_LISTING = 'DELETE_LISTING'
export const UPDATE_LISTING = 'UPDATE_LISTING'

const createListing = listing => ({
    type: CREATE_NEW_LISTING,
    listing
})

const receiveListings = listing => ({
    type: RECEIVE_LISTINGS,
    listingS
})

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
})

const updateListing = listing => ({
    type: UPDATE_LISTING,
    listing
})


const removeListing = listingId => ({
    type: DELETE_LISTING,
    listingId
})


export const makeListing = listing => dispatch => {
    return listingApiUtils.createListing(listing)
     .then(listing => dispatch(createListing(listing)))
}

export const requestListings = listings => dispatch => {
    return listingApiUtils.requestListing(listings)
        .then(listings => dispatch(receiveListings(listings)) )
}


export const requestListing = listingId => dispatch => {
    return listingApiUtils.requestListing(listingId)
        .then(listing => dispatch(receiveListing(listing)) )
}

export const deleteListing = id => dispatch => {
    return listingApiUtils.deleteListing(id)
        .then(id => dispatch(removeListing(id)))
}

export const patchListing = listing => dispatch => {
    return listingApiUtils.patchListing(listing)
        .then(listing => dispatch(updateListing(listing)))
}

