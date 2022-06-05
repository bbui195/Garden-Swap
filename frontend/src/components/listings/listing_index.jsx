import React, { useState, useContext, useEffect } from 'react'
import ListingIndexItem from './listing_index_item'
import Navbar from '../navbar/nav_bar'
import { ZipcodeContext } from '../../hooks/zipcodeContext'
// const axios = require("axios");

function ListingIndex(props) {
    const [distance, setDistance] = useState('')
    const [populated, setPopulated] = useState([])
    const {zipCode, setZipCode} = useContext(ZipcodeContext)
    
    const { listings } = props
    
    useEffect( async ()  => {
        let fetchedListings = await props.requestListings()
        // setPopulated(props.requestListings())
        fetchedListings = Object.values(fetchedListings.listings)
        // console.log('useeffect',fetchedListings.listings)
        setPopulated(fetchedListings)
    },[])

    useEffect(() => {
        console.log('listings',listings)
        console.log('zipcode!!',zipCode)
        console.log('temp array', response)
        let filteredlistings = (listings.filter(listing => (
            response.includes(listing.location)
        )))
        console.log('filtered lsitings',filteredlistings)
        setPopulated(filteredlistings)
    },[distance])


    console.log('populated',populated)
    
    // setPopulated(this.props.listings)
    // console.log('populated',populated)
    if (!listings){
        return null
    } 
  
    return(
        <>  
        {/* populated.length === 0 ? 'null':  */}
        <div className='zipcodeFilter'>
            <form action="">Distance
            <input 
                type="radio" 
                name="distance"
                value='3'
                onChange={e => setDistance(e.target.value)}
                />3
            <input 
                type="radio" 
                name="distance"
                value='5' 
                onChange={e => setDistance(e.target.value)}
                />5
            <input 
                type="radio" 
                name="distance"
                value='10' 
                onChange={e => setDistance(e.target.value)}
                />10
            </form>
        </div>

            <Navbar />
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