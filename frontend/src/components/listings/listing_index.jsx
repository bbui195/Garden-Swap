import React, { useState, useContext, useEffect } from 'react'
import ListingIndexItem from './listing_index_item'
import Navbar from '../navbar/nav_bar'
import { ZipcodeContext } from '../../hooks/zipcodeContext'
// const axios = require("axios");

function ListingIndex(props) {
     const [distance, setDistance] = useState('')
     const [populated, setPopulated] = useState([])
     const {zipCode, setZipCode} = useContext(ZipcodeContext)

    useEffect(() => {
        setPopulated(props.requestListings())
    },[])

    useEffect(() => {
        setPopulated(listings.filter(listing => 
            (
            zipCode.includes(listing.location)
        )))
    },[distance])


    console.log('populated',populated)
    
    // setPopulated(this.props.listings)
    // console.log('populated',populated)
    const { listings } = props
    if (!listings){
        return null
    } 
    //works to get zipcodes back
    // const encodedParams = new URLSearchParams();
    // encodedParams.append("zip_codes", zipCode);
    
    // const options = {
    //   method: 'POST',
    //   url: 'https://redline-redline-zipcode.p.rapidapi.com/rest/multi-radius.json/10/mile',
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'X-RapidAPI-Host': 'redline-redline-zipcode.p.rapidapi.com',
    //     'X-RapidAPI-Key': 'cd61b4440cmsha254acd154c1132p177531jsnf5f13f569bdb'
    //   },
    //   data: encodedParams
    // };
    
    // axios.request(options).then(function (response) {
    //     let filterZipcodes = response.data.responses[0].zip_codes
    //     // console.log('filtered',filterZipcodes)
    // }).catch(function (error) {
    //     console.error(error);
    // });


    //2ndary working api
    const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://vanitysoft-boundaries-io-v1.p.rapidapi.com/reaperfire/rest/v1/public/boundary/zipcode/location',
//   params: {latitude: '37.7799', longitude: '-122.2822', radius: '5'},
//   headers: {
//     'X-RapidAPI-Host': 'vanitysoft-boundaries-io-v1.p.rapidapi.com',
//     'X-RapidAPI-Key': 'cd61b4440cmsha254acd154c1132p177531jsnf5f13f569bdb'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log('zipcode api call',response.data.features);
// }).catch(function (error) {
// 	console.error(error);
// });



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
                {listings.map(listing => (
                    <ListingIndexItem key={listing.id} listing={listing} />
                    ))}
            </div>
        </>
    )
}

export default ListingIndex