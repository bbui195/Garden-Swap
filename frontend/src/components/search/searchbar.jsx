import React from 'react';


class SearchBox extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            searchField: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        if (e.keyCode === 13) {
            this.props.history.push(`/listings/search/${e.target.value}`)
        };
    };

 render(){
     return (
        <>
            <input type="search"
            className='search-bar' 
            placeholder="Search local listings"
            onKeyDown={this.handleSearch}
            />
        </>
        )
    
 }
    

}
export default SearchBox;