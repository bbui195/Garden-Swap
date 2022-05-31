import { Link } from 'react-router-dom'
import React from 'react'

function Footer(props) {
    return (
        <footer>
            <ul>
                <Link to='/'><li>Conditions of Use</li></Link>
                <Link to='/'><li>Privacy Notice</li></Link>
                <Link to='/'><li>Help</li></Link>
            </ul>
        </footer>
    )
}

export default Footer