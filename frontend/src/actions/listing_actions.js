import * as listingApiUtils  from '../utils/listing_utils'


export const CREATE_NEW_LISTING = 'CREATE_NEW_LISTING'
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS'
export const RECEIVE_LISTING = 'RECEIVE_LISTING' 
export const DELETE_LISTING = 'DELETE_LISTING'
export const UPDATE_LISTING = 'UPDATE_LISTING'

const createListing = listing => ({
    type: CREATE_NEW_LISTING,
    listing
})

const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings
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

export const testMakeListing = listing => dispatch => {
    return listingApiUtils.testCreateListing(listing)
     .then(listing => dispatch(createListing(listing)))
}

export const requestListings = () => dispatch => {
    return listingApiUtils.fetchListings()
        .then(listings => dispatch(receiveListings(listings.data)) )
}

export const requestListing = listingId => dispatch => {
    return listingApiUtils.fetchListing(listingId)
        .then(listing => dispatch(receiveListing(listing.data)) )
}

export const deleteListing = id => dispatch => {
    return listingApiUtils.deleteListing(id)
        .then(() => dispatch(removeListing(id)))
}

export const patchListing = listing => dispatch => {
    return listingApiUtils.patchListing(listing)
        .then(listing => dispatch(updateListing(listing.data)))
}

 export const fetchListingsBySearch = query => dispatch => {
    //  console.log('we made it to the listing action')
    return listingApiUtils.fetchSearchListings(query)
            .then(listings => dispatch(receiveListings(listings.data)))
}

