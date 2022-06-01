import React from 'react'
import { Link } from 'react-router-dom'
import words from "../../assets/images/words.png";
import cabbage from "../../assets/images/cabbage.png";
import ListingForm from '../listings/listing_form_container';
// import { FaLocationArrow } from "react-icons/Fa";

export default ({ currentUser,logoutUser}) => {

    const session = currentUser ? (
        <div>
            <div>
                <p>Hello, {currentUser.username}</p>  
            </div>
            <button onClick={logoutUser}>Log Out</button>
        </div>
    ) : (
        <>
            <ul>
                <li >
                    <Link to='/login' className='link'>Sign In</Link>
                </li>
            </ul>
        </>
    )

    


    return (
        <>
            <header className='header-container'>
                <div className='topline'>
                    <Link to="/">
                        <img src={words} alt="Logo" className='logo'/>
                        <img src={cabbage} alt="Logo" className='logo'/>
                    </Link>
                    <input type="text" className='search-bar' placeholder="Search local gardens"/>
                    <div>
                        <i className="fa-solid fa-location-arrow location-icon"></i>
                        <p>Current Location</p>
                    </div>
                    <p>{session}</p> 
                </div>
                <div>
                    <p className='cats'>Categories</p>
                </div>
               
            </header>
            <ListingForm/>
        </>
    )
};