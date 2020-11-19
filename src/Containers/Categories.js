import React from 'react';
import './Categories.css';

const Categories = () => {
    return(
        <div className='Category'>
            <h2 className='Category__Title'>Search by Category</h2>
            <form>
                <select>
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Fish</option>
                    <option>Bird</option>
                </select>
            </form>
        </div>
    )
}

export default Categories;