import React from 'react'
import { Link } from 'react-router-dom'
import ListingIndexItem from './listing_index_item'

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        // let filter = {}
        
        this.props.requestListings()
        console.log('mount',this.props)
    }

    render() {
        //i'm assuming i have all the listings passed in container

        // console.log('listing index', this.props)
        // const {listings} = this.props
        // const {listings} = Object.values(this.props.listings[0].data)
        // console.log(Object.values(this.props.listings[0].data[0]))
        // const listings = (Object.values(this.props.listings[0].data[0]))
        return(
            <div>
                {/* {listings.map(listing => (
                    <div>
                        <ListingIndexItem listing={listing} />
                    </div>
                ))} */}
            </div>
        )
    }
}

export default ListingIndex