import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import cabbage from "../../assets/images/cabbage.png";
import profilePic from "../../assets/images/prof-placeholder.png"
import { BiLogOut, BiImageAdd } from "react-icons/bi";
import { FiInbox } from "react-icons/fi";
import johnProf from "../../assets/images/john-prof.jpeg"
import { LocationContext } from '../hooks/zipcodeContext';


export default (props) => {
    const { currentUser, logoutUser} = props;
    // console.log(props, currentUser);
    const categories = [
        'Fruit', 'Vegetables', 'Nuts', 'Dairy', 'Meats', 'Grains'
    ]

    const session = currentUser ? (
        <div className="profile-dropdown" onClick={toggleDropDown}>
            <img src={johnProf} className='prof' />
            <div className='dropdown-content'>
                <div className='username-container'>
                    Hi, {currentUser.username}
                </div>
                <Link className='user-profile-container' to={`/users/${currentUser.id}`}>
                    <img src={johnProf} className='prof' />
                    <span>Profile</span> 
                </Link>
                <Link className='add-listing-container' to='/listingForm'>
                    <span><BiImageAdd size={26} color = "black"/></span>
                    <span>Add Listing</span>
                </Link>
                <Link className='inbox-container' to='/user/inbox'>
                    <span><FiInbox size={26} color = "black"/></span>
                    <span>Inbox</span>
                </Link>
                <div className='sign-out-container' onClick={logoutUser}>
                    <span><BiLogOut size={26} color = "black"/></span>
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


    function dropDown2(e) {
        // console.log(e);
        if (!e.target.closest(".profile-dropdown") && !e.target.closest(".dropdown-content")) {
            document.querySelector(".dropdown-content").style.display = 'none'
            document.removeEventListener("click", dropDown2)
        }
    }

    function toggleDropDown() {
        let dropDown = document.querySelector('.dropdown-content');
        // console.log(dropDown.style.display);
        if (dropDown.style.display === 'none') {
            dropDown.style.display = 'flex'
            document.addEventListener('click', dropDown2);

        } else {
            dropDown.style.display = 'none'
            document.removeEventListener('click', dropDown2);
        };
    };

    function updateLocation(e) {
        setLocation({...location,zipCode:e.currentTarget.value})
    }



    const {location, setLocation} = useContext(LocationContext)

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
                        <p>Filter by Zipcode?{location.zipCode}</p>
                        <input value={location.zipCode} onChange={updateLocation} type="text" />
                        <button>Enter Zipcode</button>
                           {/* populated.length === 0 ? 'null':  */}
        <div className='zipcodeFilter'>
            <form action="">Distance Filter (miles)

            <input 
                type="radio" 
                name="distance"
                value='3'
                onChange={e => setLocation({...location,radius:e.target.value})}
                />3
            <input 
                type="radio" 
                name="distance"
                value='5' 
                onChange={e => setLocation({...location,radius:e.target.value})}
                />5
            <input 
                type="radio" 
                name="distance"
                value='10' 
                onChange={e => setLocation({...location,radius:e.target.value})}
                />10
            </form>
        </div>
                 
                    </div>
                    <div>{session}</div> 
                </div>
                <div className='bottom-line'>
                    <ul className='cats'>
                        {categories.map(category => {
                                return (
                                    <Link to={`/category/${category}`} key={category}>{category}</Link>
                                )
                            })
                        }
                    </ul>
                </div>
               
            </header>
        </>
    )
};