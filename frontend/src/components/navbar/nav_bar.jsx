import React from 'react'
import { Link } from 'react-router-dom'
import words from "../../assets/images/words.png";
import cabbage from "../../assets/images/cabbage.png";
import profilePic from "../../assets/images/cabbage.jpeg"

export default ({ currentUser, logoutUser}) => {

    const session = currentUser ? (
        <div>
            <div>
                <img src={profilePic} alt="prof" className='prof'/>  
            </div>
            <button onClick={logoutUser}>Log Out</button>
        </div>
        // <div className="profile-dropdown" onClick={this.toggleDropDown}>
        //     <img src={window.profilePicLogo} className='profile-logo' />
        //     <img src={window.downArrowIcon} className='down-arrow-icon' />
        //     <div className='dropdown-content'>
        //         <div className='email-container'>
        //             <img src={window.profilePicLogo} className='profile-logo' />
        //             <span>{this.props.currentUser.username}</span>
        //         </div>
        //         <div className='orders-container'>
        //             <img src={window.ordersIcon} className='orders-icon' />
        //             <Link to='/orders'>Order History</Link>
        //         </div>
        //         <div className='sign-out-container'>
        //             <img src={window.signOutIcon} className='sign-out-icon' />
        //             <button className="logout-button" onClick={this.props.logout}>Log Out</button>
        //         </div>
        //     </div>
        // </div>
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
                    <div>{session}</div> 
                </div>
                <div>
                    <p className='cats'>Categories</p>
                </div>
               
            </header>
        </>
    )
};