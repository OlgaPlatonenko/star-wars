import React, { useEffect, useImperativeHandle, useState } from 'react';
import { getApiPeople, getApiPerson } from '../../api/swapifunc';
import PersonDetails from '../PersonDetails/PersonDetails';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

import './ItemList.css';

const ItemList = () => {

    const [persons, setPersons] = useState([]);
    const [activePerson, setActivePerson] = useState(true);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getApiPeople()
            .then((persons) => {
                setPersons(persons);
            })
            .catch(setError(true));
    }, []);

    let element = null;

    if (!error) {
        element = persons.map(item => {
            const { name } = item;
            return (
                <li key={name} >
                    {name}
                </li>
            );
        });
    };


    return (
        <div className='itemlist-container'>
            {
                (activePerson && !error) ?
                    <PersonDetails name={'persons[1]'} />
                    :
                    <h3>false</h3>
            }

            {error ?
                <div>
                    <ErrorIndicator />
                </div>
                :
                <ul>
                    {element}
                </ul>
            }

        </div>
    );
}

export default ItemList;
