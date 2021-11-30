import React from 'react';

import './Header.css';

const Header = () => {
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
        </div>
        //People Planets Starships
    );
}

export default Header;