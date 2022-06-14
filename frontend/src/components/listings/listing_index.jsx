import React, { useState, useContext, useEffect } from 'react'
import ListingIndexItem from './listing_index_item'
import '../../utils/zipcodes_list'
import { isWithinRadiusFromZipcode } from '../../utils/zipcodes_utils'
import { useParams } from 'react-router-dom'

function ListingIndex(props) {
    const [populated, setPopulated] = useState([])
    const [categoryFilter, setCategoryFilter] = useState([])
    const { location, setLocation } = props
    const { listings, requestListings } = props
    let { categoryId } = useParams()
    let category = categoryId
    let fetchCategoryListings = [];
    useEffect(() => {
        async function fetchData() {
            let fetchedListings = await requestListings()
            fetchedListings = Object.values(fetchedListings.listings)

            if (category !== undefined) {
                fetchedListings = fetchedListings.filter(listing => (
                    listing.category === category
                ))
            }

            setCategoryFilter(fetchedListings)
            radiusFilter(location.zipCode, location.radius, fetchedListings)
        }
        fetchData()
    }, [])
    useEffect(() => {
        async function fetchData() {
            let fetchedListings = await requestListings()
            fetchedListings = Object.values(fetchedListings.listings)

            if (category !== undefined) {
                fetchedListings = fetchedListings.filter(listing => (
                    listing.category === category
                ))
            }

            setCategoryFilter(fetchedListings)
            radiusFilter(location.zipCode, location.radius, fetchedListings)
        }
        fetchData()
    }, [category])

    useEffect(() => {
        radiusFilter(location.zipCode, location.radius, categoryFilter)

    }, [location, location.zipCode, location.radius])

    function radiusFilter(zipcode, radius, fetchedListings) {
        let filteredlistings = fetchedListings;
        if (zipcode) {
            filteredlistings = fetchedListings.filter(listing => {
                return isWithinRadiusFromZipcode(zipcode, listing.location, radius)
            })
        }
        setPopulated(filteredlistings)
    }

    if (!listings) {
        return null
    }
    let listingIndexItems = populated.map(listing => (
        <ListingIndexItem key={listing.id} listing={listing} />
    ));
    return (
        <>
            <div className='listing-index-container'>
                {listingIndexItems.length > 0 ? 
                    listingIndexItems :
                    <p>No results within {props.location.radius} miles of your area</p>}
            </div>
        </>
    )
}

export default ListingIndex