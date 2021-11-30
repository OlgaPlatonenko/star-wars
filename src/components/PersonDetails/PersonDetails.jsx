import React from 'react';

import './PersonDetails.css';

const PersonDetails = ({ name }) => {

    return (
        <div>
            PersonDetails
            <div> {name}</div>
            <div></div>
            <img className='person-details_card'
                src='https://starwars-visualguide.com/assets/img/characters/3.jpg'></img>
            <h4>R2-D2</h4>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Gender</li>
                <li className='list-group-item'>Birth year</li>
                <li className='list-group-item'>Eye color</li>
            </ul>
        </div>
    );
}

export default PersonDetails;