import React, { Component } from 'react';
import SwapiService from '../../api/swapi';

import './PersonDetails.css';

export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        person: {},
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps){
        if (this.props.personId !== prevProps.personId){
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }
        this.swapiService
            .getApiPerson(personId)
            .then((person) => {
                this.setState({ person });
            })
    };

    render() {
        const { id, name, birth_year } = this.state.person;

        return (
            <div>
                PersonDetails
                <div> {name} {this.props.personId}</div>
                <div>{id}</div>
                <img className='person-details_card'
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}></img>
                <h4>{birth_year}</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>Gender</li>
                    <li className='list-group-item'>Birth year</li>
                    <li className='list-group-item'>Eye color</li>
                </ul>
            </div>
        );
    };
}
/*
const PersonDetails = ({ name, id }) => {

 return (
        <div>
            PersonDetails
            <div> {name}</div>
            <div>{id}</div>
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

export default PersonDetails;*/