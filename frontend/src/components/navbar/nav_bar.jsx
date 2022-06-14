import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import cabbage from "../../assets/images/cabbage.png";
import profilePic from "../../assets/images/prof-placeholder.png"
import { BiLogOut, BiImageAdd } from "react-icons/bi";
import { FiInbox } from "react-icons/fi";
import { BsDashLg } from "react-icons/bs";
import { debounce } from 'lodash';
import { STATES } from 'mongoose';
import zipcodes_list from '../../utils/zipcodes_list';


export default (props) => {
    const { currentUser, logoutUser } = props;
    const { location } = props;
    const [distance, setDistance] = useState(25);
    const [isLoadingZip,setIsLoadingZip] = useState(false)
    const categories = [
        'Fruit', 'Vegetables', 'Nuts', 'Dairy', 'Meats', 'Grains'
    ]

    const session = currentUser ? (
        <div className="profile-dropdown" onClick={toggleDropDown}>
            <img src={profilePic} className='prof' />
            <div className='dropdown-content'>
                <div className='username-container'>
                    Hi, {currentUser.username}
                </div>
                <Link className='user-profile-container' to={`/users/${currentUser.id}`}>
                    <img src={profilePic} className='prof' />
                    <span>Profile</span>
                </Link>
                <Link className='add-listing-container' to='/listingForm'>
                    <span><BiImageAdd size={26} color="black" /></span>
                    <span>Add Listing</span>
                </Link>
                <Link className='inbox-container' to='/user/inbox'>
                    <span><FiInbox size={26} color="black" /></span>
                    <span>Inbox</span>
                </Link>
                <div className='sign-out-container' onClick={logoutUser}>
                    <span><BiLogOut size={26} color="black" /></span>
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

    // useEffect(() => {
    //     if (props.currentUser) {
    //         toggleDropDown()
    //         // toggleDropDown2()
    //     };
    //     let dd = document.querySelector('.zipcode-filter');
    //     if (dd.style.display === 'none') {
    //         document.addEventListener('click', dropDown3);

    //     }
    // });


    function dropDown2(e) {
        if (!e.target.closest(".profile-dropdown") && !e.target.closest(".dropdown-content")) {
            document.querySelector(".dropdown-content").style.display = 'none'
            document.removeEventListener("click", dropDown2)
        }
    }

    function toggleDropDown() {
        let dropDown = document.querySelector('.dropdown-content');
        if (dropDown.style.display === 'none' || dropDown.style.display === '') {
            dropDown.style.display = 'flex'
            document.addEventListener('click', dropDown2);

        } else {
            dropDown.style.display = 'none'
            document.removeEventListener('click', dropDown2);
        };
    };

    function dropDown3(e) {
        if (!e.target.closest(".location-dropdown") && !e.target.closest(".zipcode-filter")
                && !e.target.closest(".btn")) {
            document.querySelector(".zipcode-filter").style.display = 'none'
            document.removeEventListener("click", dropDown3)
        }
    }

    function toggleDropDown2() {
        let dropDown = document.querySelector('.zipcode-filter');
        if (dropDown.style.display === 'none' || dropDown.style.display === '') {
            dropDown.style.display = 'flex'
            document.addEventListener('click', dropDown3);

        } else {
            dropDown.style.display = 'none'
            document.removeEventListener('click', dropDown3);
        };
    };

    function updateLocation(e) {
        e.preventDefault()
        props.updateLocationZipcode(e.target.value)
    };


    function handleScroll(e) {
        debounce(function () { props.updateLocationRadius(parseInt(e.target.value), 10) }, 500)();
        setDistance(e.target.value)
    };

    function updateZip(e) {
        e.preventDefault()
        setIsLoadingZip(true)
        navigator.geolocation.getCurrentPosition(position => {
            let userPosition = {
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            }

            function zipCodeCheck(userObjLocation, objectLocation) {
                let lowestDist = 1000000000;
                let closestZip = undefined;
                Object.keys(objectLocation).forEach(zip => {
                    let { latitude, longitude } = objectLocation[zip];
                    let dist = Math.abs(latitude - userObjLocation.latitude)
                        + Math.abs(longitude - userObjLocation.longitude);
                    if (dist < lowestDist) {
                        lowestDist = dist;
                        closestZip = zip;
                    }
                });
                return closestZip;
            }

            let zipcode = zipCodeCheck(userPosition, zipcodes_list)
            props.updateZip(zipcode)
            setIsLoadingZip(false)
        },
            () => console.log("null"),
            { maximumAge: 5000 }
        )

    }


    return (
        <>
            <header className='header-container'>
                <div className='topline'>
                    <Link to="/" className='logos'>
                        <span className='title'>Garden Swap</span>
                        <img src={cabbage} alt="Logo" className='logo' />
                    </Link>
                    <input type="text" className='search-bar' placeholder="Search local gardens" />
                    <div>
                        {/* <p>Filter by Zipcode?{location.zipCode}</p> */}
                        {/* populated.length === 0 ? 'null':  */}
                        <div className='location-dropdown' >
                            <button className='dropbtn' onClick={toggleDropDown2}>
                                Enter Zipcode{" "}
                            </button>
                            <form action="" className='zipcode-filter'>
                                <span>Enter Zipcode</span>
                                <input
                                    value={location.zipCode}
                                    className="enter-zip"
                                    onChange={updateLocation}
                                    type="text"
                                />
                                <div className='or-dash'>
                                    <BsDashLg />
                                    <span>or</span>
                                    <BsDashLg />
                                </div>

                                {isLoadingZip ? 
                                    <span>Loading</span> :   
                                    <button onClick={updateZip} className="btn">Use Current Location</button>
                                }
                                <div className='slider-container'>
                                    <div className='distance'>
                                        <span>Distance:</span>
                                        <span className='miles'>
                                            {distance} {distance == 1 ? "Mile" : "Miles"}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="25"
                                        defaultValue='25'
                                        onChange={handleScroll}
                                        className="slider"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>{session}</div>
                </div>
                <div className='bottom-line'>
                    <ul className='cats'>
                        {categories.map(category => {
                            return (
                                <Link to={`/category/${category}`} key={category} className={category}>
                                    {category}
                                </Link>
                            )
                        })
                        }
                    </ul>
                </div>
            </header>
        </>
    )
};