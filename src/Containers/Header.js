import React from 'react';
import Button from '../Components/Button';
import Puzzle from '../puzzle.jpg';
import './Header.css';

const Header = () => {
    return (
        <header className='Header'>
            <div className='bg-image'></div>
            <h2 className='Header__Title'>Lost Something?</h2>
            <p className='Header__Content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt debitis earum hic. At officiis magnam, corrupti soluta culpa eveniet exercitationem?</p>
            <Button>View Ads</Button>
        
        </header>
    )
}

export default Header;