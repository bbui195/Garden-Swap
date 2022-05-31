import React from 'react'
import { Link } from 'react-router-dom'

export default ({ currentUser,logoutUser}) => {

    const display = currentUser ? (
        <div>
           
            <div>
                <p>Hello, {currentUser.name}</p>
            </div>
            <button onClick={logoutUser}>Log Out</button>
        </div>
    ) : (
        <>
            <ul>
                <li><Link to='/login' >Hello, Sign In<span>Account & Lists</span></Link>
                    <ul>
                        <li>
                            <button><Link to='/login'>
                                <p >Sign In</p></Link></button>
                        </li>
                        <li>
                            <p>New Customer?<Link to='/signup'><span> Start here</span>.</Link></p></li>
                    </ul>
                </li>
            </ul>
        </>
    )

    


    return (
        <>
            <header>
               <p>header</p>
            </header>
        </>
    )
}