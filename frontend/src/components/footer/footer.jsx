import { Link } from 'react-router-dom'

function Footer(props) {
    <footer>
        <ul className='footer-nav'>
            <Link className='text-link' to='/'><li>Conditions of Use</li></Link>
            <Link className='text-link' to='/'><li>Privacy Notice</li></Link>
            <Link className='text-link' to='/'><li>Help</li></Link>
        </ul>
    </footer>
}


export default Footer