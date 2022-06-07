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
    const {location, setLocation} = useContext(LocationContext)
    
    const { listings,requestListings } = props
    useEffect( ()  => {
        async function fetchData() {
            let fetchedListings = await requestListings()
            fetchedListings = Object.values(fetchedListings.listings)
            setPopulated(fetchedListings)
        }
        fetchData()
    },[])

    useEffect( ()  => {
        radiusFilter(location.zipCode,location.radius)
    },[location.zipCode,location.radius])

    function radiusFilter(zipcode,distance) {
        let mileConversion = 1609.34
        let radius = mileConversion * distance
        let filteredlistings = listings.filter(listing => {
            return isWithinRadiusFromZipcode(zipcode,listing.location,radius)
        })
        setPopulated(filteredlistings)
    }

   
    if (!listings){
        return null
    } 
    // works to get zipcodes back
    // const encodedParams = new URLSearchParams();
    // encodedParams.append("zip_codes", zipCode);
    
    // const options = {
    //   method: 'POST',
    //   url: `https://redline-redline-zipcode.p.rapidapi.com/rest/multi-radius.json/${distance}/mile`,
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'X-RapidAPI-Host': 'redline-redline-zipcode.p.rapidapi.com',
    //     'X-RapidAPI-Key': zipcodeAPIKey
    //   },
    //   data: encodedParams
    // };
    
    // axios.request(options).then(function (response) {
    //     localStorage.setItem('cached_response', JSON.stringify(response))
    //     console.log(response)
    //     setZipCode(response.data.responses[0].zip_codes)
    //     // console.log('filtered',filterZipcodes)
    // }).catch(function (error) {
    //     console.error(error);
    // });
    // console.log(props);
    // console.log('populate',populated)
//
// let response = [
//     94501,	
//     94502,
//     94502,
//     94502,
//     94536,
//     94537,
//     94538,
//     94539,
//     94540,
//     94541,
//     94542,
//     94543,
//     94544,
//     94545,
//     94546,
//     94546,
//     94550,
//     94551,
//     94552,
//     94552,
//     94555,
//     94557,
//     94557,
//     94560,
//     94566,
//     94568,
//     94608,
//     94578,
// ].map(zipcode => (zipcode.toString(10)))


//     const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://vanitysoft-boundaries-io-v1.p.rapidapi.com/reaperfire/rest/v1/public/boundary/zipcode/location',
//   params: {latitude: '37.7799', longitude: '-122.2822', radius: '5'},
//   headers: {
//     'X-RapidAPI-Host': 'vanitysoft-boundaries-io-v1.p.rapidapi.com',
//     'X-RapidAPI-Key': 'cd61b4440cmsha254acd154c1132p177531jsnf5f13f569bdb'
//   }
// };



    //     localStorage.setItem('cached_response', JSON.stringify(response))
// axios.request(options).then(function (response) {
//     localStorage.setItem('cached_response', JSON.stringify(response))

// }).catch(function (error) {
// 	console.error(error);
// });

//     let response = JSON.parse(localStorage.getItem('cached_response'))
//     console.log('response',response)
//     // let filterZipcodes = response.data.response[0].zip_codes



        // console.log('populated',populated)
    return(
        <>  
            {/* <NavBarContainer /> */}
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