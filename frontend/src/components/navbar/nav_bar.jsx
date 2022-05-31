import React from 'react'
import { Link } from 'react-router-dom'

export default ({ currentUser,logoutUser}) => {

    const display = currentUser ? (
        <div>
            <div>
                <p>Hello, {currentUser.username}</p>
            </div>
            <button onClick={logoutUser}>Log Out</button>
        </div>
    ) : (
        <>
            <ul>
                <li><Link to='/login' >Hello, Sign In<span>Account</span></Link>
                <li>New User?<Link to='/signup'><span> Start here</span>.</Link></li>
                </li>
            </ul>
        </>
    )

    


    return (
        <>
            <header>
               <p>header</p>
               <p>{display}</p> 
            </header>
        </>
    )
}