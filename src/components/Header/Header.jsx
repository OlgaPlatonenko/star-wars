import React from 'react';

import './Header.css';

const Header = ({ onServiceChange }) => {
    return (
        <div className='header-container'>
            <div className='header-container__logo'>
                Star DB
            </div>
            <ul className='header-container__menu'>
                <li>People</li>
                <li>Planets</li>
                <li>Starships</li>
            </ul>
            <button
                className='btn btn-primary btn-sm'
                onClick={onServiceChange}
            >
                Change
            </button>
        </div>
        //People Planets Starships
    );
}

export default Header;