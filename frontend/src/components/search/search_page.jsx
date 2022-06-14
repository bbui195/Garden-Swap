import React from "react";
import { Link } from "react-router-dom";
import ListingIndexItem from "../listings/listing_index_item";

class SearchPage extends React.Component {
    constructor(props) {
        super(props)
        this.searchResults = this.searchResults.bind(this);
    };

    componentDidMount() {
        // debugger
        // console.log(this.props.match.params, 'here I am in the search page')
        this.props.fetchListingsBySearch(this.props.match.params.query)
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.query !== prevProps.match.params.query) {
            this.props.fetchListingsBySearch(this.props.match.params.query)
        };
    };

    searchResults() {
        if (this.props.listings.length > 0) {
            return (
                <div className="results-container">
                    <span>Search results for {this.props.match.params.query}...</span>
                </div>
            )
        } else {
            return (
                <div className="results-container">
                    <span>Sorry, We couldn't find any results for {this.props.match.params.query}...</span>
                    <p>Try searching for something else instead?</p>
                </div>
            )
        };
    };

    render() {
        if (!this.props.listings) {
            return null
        };

        return(
            <div className="search-page-container">
                {this.searchResults()}
                {this.props.listings.map(listing => {
                        return (

                            <ListingIndexItem key={listing.id} listing={listing}/>
                            // <Link className="listing-content" to={`/listings/${listing.id}`} >
                            //     <img src={listing.photoUrl} className='img'/>
                            //     <div className="details">
                            //         <div className="p-name">{listing.product_name}</div>
                            //         <div className="price-shop">
                            //             <span className="price">${listing.price}</span>
                            //             <span className="s-name">{listing.shop_name}</span>
                            //         </div>
                            //     </div>
                            // </Link>
                        )
                    })
                }
            </div>
        )
    };
};

export default SearchPage;