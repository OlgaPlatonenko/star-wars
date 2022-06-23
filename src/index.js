import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SwapiService from "./api/swapi";
import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import ItemList from './components/ItemList/ItemList';
import ItemDetails, { Record } from './components/ItemDetails/ItemDetails';
import Row from './components/Row/Row';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';

import './main.css';
import Item from 'antd/lib/list/Item';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';

const swapi = new SwapiService();
/*
swapi.getApiPeople()
    .then((people) => {
        console.log(people);
    });

swapi.getApiPlanet()
    .then((planets) => {
        console.log(planets);
    });

swapi.getApiStarship()
    .then((startships) => {
        console.log(startships);
    }
    );
    */

export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 2,
    };

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id,
        });
    };

    render() {

        const itemListPeople = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getApiPeople}
            >
                {(i) => (
                    `${i.name} (${i.birth_year})`
                )}
            </ItemList>
        );

        const itemDetails = (
            <ItemDetails
                getData={this.swapiService.getApiPerson}
                getImageUrl={this.swapiService.getPersonImage}
                itemId={this.state.selectedPerson}
            />
        );

        const itemListPlanet = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getApiPlanet}
            >
                {(i) => (<span>{i.name} <button>!</button> {i.diameter} {i.population}</span>
                )}
            </ItemList>
        );

        const itemListStarship = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getApiStarship}
            >
                {(item) => item.name}
            </ItemList>
        );

        const { getApiPerson,
            getApiStarshipById,
            getPersonImage,
            getStarshipImage } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getApiPerson}
                getImageUrl={getPersonImage}
            >
                <Record field='name' label='Name' />
                <Record field='birth_year' label='Birth_year' />
                <Record field='eye_color' label='Eye color' />
            </ItemDetails>
        )
        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getApiStarshipById}
                getImageUrl={getStarshipImage}
            >
                <Record field='model' label='Model' />
                <Record field='length' label='Length' />
            </ItemDetails>
        )

        return (
            <div className='main-container' >
                <Header />
                <Row
                    left={personDetails}
                    right={starshipDetails}
                />
                <ErrorBoundry>
                    <RandomPlanet />
                    <Row left={itemListPeople} right={itemDetails} />
                    <br></br>
                    <Row left={itemListPlanet} right='' />
                    <br></br>
                    <Row left={itemListStarship} right='' />
                </ErrorBoundry>

            </div>
        );
    };

}

ReactDOM.render(<App />, document.getElementById('root'));


