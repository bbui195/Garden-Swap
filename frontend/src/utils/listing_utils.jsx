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
    debugger
    for(var pair of listing.entries()) {
        console.log(pair[0]+ ', '+ pair[1]);
    }
    let listingId = listing.get('listing[id]');
    return axios.patch(`/api/listings/${listingId}`, listing)
}

export const testCreateListing = listing => {
    debugger
    for (var value of listing.values()) {
        console.log(value);
    }
    return axios.post('/api/listings/image', listing)
}