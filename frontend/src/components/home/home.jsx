import React from 'react'
import ListingIndex from '../listings/listing_index_container';
import Geo from '../geo/geo'

function Home() {
    Geo()
    return(
        <div>
            <p>Home Page</p>
            <ListingIndex/>
        </div>
    )
}

export default Home