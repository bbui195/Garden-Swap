// import { zipcodeAPIKey } from '../../config/keys'
import React, { useState, useContext, useEffect } from 'react'
import ListingIndexItem from './listing_index_item'
// import Navbar from '../navbar/nav_bar'
import { LocationContext } from '../hooks/zipcodeContext'
import '../../utils/zipcodes_list'
import { isWithinRadiusFromZipcode } from '../../utils/zipcodes_utils'
import NavBarContainer from '../navbar/nav_bar_container'


function ListingIndex(props) {
    const [populated, setPopulated] = useState([])
    const [categoryFilter,setCategoryFilter] = useState([])
    const {location, setLocation} = useContext(LocationContext)
    
    const { listings,requestListings } = props
    let category = props?.match?.params?.categoryId
    let fetchCategoryListings = [];

    useEffect( ()  => {
        async function fetchData() {
            let fetchedListings = await requestListings()
            console.log('initial fetched listings',fetchedListings)
            fetchedListings = Object.values(fetchedListings.listings)

            if (category !== undefined) {
                console.log('category',category)
                fetchedListings = fetchedListings.filter(listing => (
                    listing.category === category
                ))
            }

            setCategoryFilter(fetchedListings)
            console.log('fetchedlistings 2nd run',fetchedListings)
            radiusFilter(location.zipCode,location.radius,fetchedListings)
        }
        fetchData()
    },[category])

    useEffect( ()  => {

        
        radiusFilter(location.zipCode,location.radius,categoryFilter)
    },[location.zipCode,location.radius])

    function radiusFilter(zipcode,distance,fetchedListings) {
        let mileConversion = 1609.34
        let radius = mileConversion * distance
        console.log('categoryFilter',categoryFilter)
        let filteredlistings = fetchedListings.filter(listing => {
            return isWithinRadiusFromZipcode(zipcode,listing.location,radius)
        })
        setPopulated(filteredlistings)
    }




   
    if (!listings){
        return null
    } 





    return(
        <>  
            <div className='listing-index-container'>
                {populated.map(listing =>
                (
                    <ListingIndexItem key={listing.id} listing={listing} />
                    ))}
            </div>
        </>
    )
}

export default ListingIndex