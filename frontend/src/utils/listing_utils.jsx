import axios from 'axios'

export const fetchListings = () => {
    return axios.get('/api/listings')
}
   
export const fetchListing = listingId => {
    return axios.get(`/api/listings/${listingId}`)
}

export const createListing = listing =>  {
    return axios.post('/api/listings/', listing)
}

export const deleteListing = listingId => {
    return axios.delete(`/api/listings/${listingId}`)
}

export const patchListing = listing => {
    return axios.patch(`/api/listings/${listing.id}`,listing)
}

export const testCreateListing = listing => {
    return axios.post('/api/listings/image', listing)
}