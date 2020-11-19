import React from 'react';
import Button from '../Components/Button';
import './Card.css';


const Card = (props) => {
    return (
        <div className='Card'>
            <h4 className='Card__Title'>{props.title}</h4>
            <p className='Time'><i class="far fa-clock"></i> {props.time} hours ago</p>
            <p className='Card__Content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quia, dolor fugiat nam similique sit.</p>
            <p className='Card__Location'><i class="fas fa-search-location"></i> {props.location}</p>
            <div className='Button-Card'>
                <Button>Read More</Button>
            </div>
            
        </div>
    )
}

export default Card;