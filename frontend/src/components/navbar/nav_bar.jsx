import React from 'react'
import { Link } from 'react-router-dom'
import words from "../../assets/images/words.png";
import cabbage from "../../assets/images/cabbage.png";
import profilePic from "../../assets/images/cabbage.jpeg"
import { useEffect } from "react";
import { BiLogOut, BiImageAdd } from "react-icons/bi";

export default ({ currentUser, logoutUser}) => {

    const session = currentUser ? (
        <div className="profile-dropdown" onClick={toggleDropDown}>
            <img src={profilePic} className='prof' />
            <div className='dropdown-content'>
                <div className='username-container'>
                    Hi, {currentUser.username}
                </div>
                <Link className='user-profile-container' to="/user/show">
                    <img src={profilePic} className='prof' />
                    <Link to="/userProfile">Profile</Link> 
                </Link>
                <Link className='add-listing-container' to='/listingForm'>
                    <span><BiImageAdd size={26} color = "black"/></span>
                    <Link to='/listingForm'>Add Listing</Link>
                </Link>
                <Link className='sign-out-container' onClick={logoutUser}>
                    <span><BiLogOut size={26} color = "black"/></span>
                    <button className="logout-button" onClick={logoutUser}>Log Out</button>
                </Link>
            </div>
        </div>
    ) : (
        <>
            <ul className='container'>
                <Link to='/login' className='btn'>Sign In</Link>
            </ul>
        </>
    );

    useEffect(() => {
        let dropDown = document.querySelector('.dropdown-content');
        if (dropDown) {
          dropDown.style.display = 'none';
        }  
    });

    function dropDown2(e) {
        console.log(e);
        if (!e.target.closest(".profile-dropdown") && !e.target.closest(".dropdown-content")) {
            document.querySelector(".dropdown-content").style.display = 'none'
            document.removeEventListener("click", dropDown2)
        }
    }

    function toggleDropDown() {
        let dropDown = document.querySelector('.dropdown-content');
        console.log(dropDown.style.display);
        if (dropDown.style.display === 'none') {
            dropDown.style.display = 'flex'
            document.addEventListener('click', dropDown2);

        } else {
            dropDown.style.display = 'none'
            document.removeEventListener('click', dropDown2);
        };
    };

 

    


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
                    <div>{session}</div> 
                </div>
                <div>
                    <p className='cats'>Categories</p>
                </div>
               
            </header>
        </>
    )
};