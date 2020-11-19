import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return(
        <div className='Footer'>
            <ul className='Footer__List'>
                <Link class='Contact_Link'to='/contact'><li>Contact Us</li></Link>
                <li>About Us</li>
            </ul>

            <p className='Footer__Copy'> &copy; Misplaced.ie 2020 </p>
        </div>
    )
}


export default Footer;