import React from 'react'
import { connect } from "react-redux";
import { requestListings } from '../../actions/listing_actions'
import ListingIndexItem from '../listings/listing_index_item'

class ListingCategoryIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // console.log('index container',this.props)
        // console.log(this.props.match.params)
        // const listings = this.props.requestListings()
        // {category: this.props.match.params.category})
        console.log('listings?',this.props.entities.listings.listings)
    }
    render() {
        return (
            <>
            <p>hi</p>
            </>
        )
    }
}

//     // componentDidUpdate(prevProps) {
//     //     if (prevProps.match.params.category !== this.props.match.params.category) {
//     //         this.props.requestProducts({category: this.props.match.params.category})
//     //     }
//     // }


//     // searchMatches(query, product) {
//     //     if (!query) {
//     //         return true
//     //     }
//     //     query = query.toLowerCase()
//     //     return product.title.toLowerCase().includes(query)
//     // }

//     render() {
//         const {listings} = this.props
//         return (
//                 <div className='index-container'>
//                     {/* {Object.values(.products??{}).filter((product)=>this.searchMatches(products.query,product)).map(product => ( */}
//                         <div>
//                             <p>hi</p>
//                             {/* <ProductIndexItem key={product.id} product={product}  /> */}
//                         </div>
//                     {/* ) */}
//                     {/* )} */}
//                 </div>
//         )
//     }
// } 

// // const toArray = vals => {
// //     if (vals.length === 0) {
// //         return []
// //     } else {
// //         return Object.values(vals)
// //     }
// // }



const mSTP = state => 
{
    return {
        listings: state.entities.listings
    }
}

const mDTP = dispatch => ({
    requestListings: data => dispatch(requestListings(data))
})

export default  connect (mSTP,mDTP)(ListingCategoryIndex)
