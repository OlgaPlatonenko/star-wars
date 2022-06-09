import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SwapiService from "./api/swapi";
import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import ItemList from './components/ItemList/ItemList';
import PersonDetails from './components/PersonDetails/PersonDetails';
import Row from './components/Row/Row';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';

import './main.css';
import Item from 'antd/lib/list/Item';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';

const swapi = new SwapiService();
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

export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 2,
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        });
    };

    render() {

        const itemListPeople = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getApiPeople}
            >
                {(i) => (
                    `${i.name} (${i.birth_year})`
                )}
            </ItemList>
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
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

        return (
            <div className='main-container' >
                <Header />
                <ErrorBoundry>
                    <RandomPlanet />
                    <Row left={itemListPeople} right={personDetails} />
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


