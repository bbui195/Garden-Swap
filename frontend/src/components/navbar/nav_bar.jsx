import React from 'react'
import { Link } from 'react-router-dom'
import words from "../../assets/images/words.png";
import cabbage from "../../assets/images/cabbage.png";
import profilePic from "../../assets/images/cabbage.jpeg"
import { useEffect } from "react";

export default ({ currentUser, logoutUser}) => {

    const session = currentUser ? (
        <div className="profile-dropdown" onClick={toggleDropDown}>
            <img src={profilePic} className='prof' />
            <div className='dropdown-content'>
                <div className='email-container'>
                    {/* <img src={window.profilePicLogo} className='profile-logo' /> */}
                    <span>{currentUser.username}</span>
                </div>
                <div className='orders-container'>
                    {/* <img src={window.ordersIcon} className='orders-icon' /> */}
                    <Link to='/orders'>Order History</Link>
                </div>
                <div className='sign-out-container'>
                    {/* <img src={window.signOutIcon} className='sign-out-icon' /> */}
                    <button className="logout-button" onClick={logoutUser}>Log Out</button>
                </div>
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

    function dropDown(e) {
        if (!e.target.closest(".profile-dropdown") && !e.target.closest(".dropdown-content")) {
            document.querySelector(".dropdown-content").style.display = 'none'
            document.removeEventListener("click", dropDown)
        }
      }

    function toggleDropDown() {
        let dropDown = document.querySelector('.dropdown-content');
        if (dropDown.style.display === 'none') {
          dropDown.style.display = 'flex'
          document.addEventListener('click', dropDown)
        } else {
          dropDown.style.display = 'none'
          document.removeEventListener('click', dropDown)
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