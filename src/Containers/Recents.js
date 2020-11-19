import React, {useState} from 'react';
import Card from '../Components/Card';
import './Recents.css';

const Recents = () => {

    const [getList, setList] = useState([
        {
            title: 'Missing Dog',
            location: 'Crumlin, Co Dublin',
            time: '17',
            status: 'Lost'
        },
        {
            title: 'Lost Wallet',
            location: 'Castletroy, Co Limerick',
            time: '6',
            status: 'Lost'
        },
        {
            title: 'Car Stolen',
            location: 'Dungarvin, Co Waterford',
            time: '14',
            status: 'Lost'
        },
        {
            title: 'Laptop Robbed',
            location: 'Clonbur, Co Galway',
            time: '2',
            status: 'Lost'
        },
        {
            title: 'Engagment Ring',
            location: 'Swords, Co Dublin',
            time: '8',
            status: 'Lost'
        },
        {
            title: 'Boat Robbed',
            location: 'Bantry, Co Cork',
            time: '23',
            status: 'Lost'
        }
    ])

    return(
        <div className='Recents'>
            <h2 className='Recents__Title'>Recent Uploads:</h2>
            {getList.map(m => (<Card title={m.title} location={m.location} time={m.time} status={m.status} />))}
            
        </div>
    )
}

export default Recents;