import React, { useEffect, useImperativeHandle, useState } from 'react';
import { getApiPeople, getApiPerson } from '../../api/swapifunc';
import PersonDetails from '../PersonDetails/PersonDetails';

import './ItemList.css';

const ItemList = () => {

    const [persons, setPersons] = useState([]);
    const [activePerson, setActivePerson] = useState(true);

    useEffect(() => {
        getApiPeople()
            .then((persons) => {
                setPersons(persons);
            });
    }, []);

    const element = persons.map(item => {
        const { name } = item;
        console.log(item);
        return (
            <li key={name} >
                {name}
            </li>
        );
    });

    return (
        <div className='itemlist-container'>
            {
                activePerson ?
                    <PersonDetails name={'persons[1]'} />
                    :
                    <h3>false</h3>
            }
            <ul>
                {element}
            </ul>
        </div>
    );
}

export default ItemList;
