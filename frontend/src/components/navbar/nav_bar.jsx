import React from 'react'
import { Link } from 'react-router-dom'
import words from "../../assets/images/words.png";
import cabbage from "../../assets/images/cabbage.png";
import ListingForm from '../listings/listing_form_container';
// import { FaLocationArrow } from "react-icons/Fa";

import profilePic from "../../assets/images/cabbage.jpeg"
export default ({ currentUser,logoutUser}) => {

    const session = currentUser ? (
        <div>
            <div>
                <img src={profilePic} alt="" />  
            </div>
            <button onClick={logoutUser}>Log Out</button>
        </div>
    ) : (
        <>
            <ul className='container'>
                <Link to='/login' className='btn'>Sign In</Link>
            </ul>
        </>
    )

    


    return (
        <>
            <header className='header-container'>
                <div className='topline'>
                    <Link to="/" className='logos'>
                        <span className='title'>Garden Swap</span>
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