import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Components/Button';
import './Navbar.css';

const Navbar = () => {
    return(
        <div className='Navbar'>
            <Link to='/'><h1 className='Navbar__Title'>Misplaced.ie</h1></Link>

            <div className='Navbar__Button'>
                <Link to='/upload'><Button>Upload</Button></Link>
            </div>
            
        </div>
    )
}

export default Navbar;