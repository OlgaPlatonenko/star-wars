import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SwapiService from "./api/swapi";
import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import ItemList from './components/ItemList/ItemList';
import PersonDetails from './components/PersonDetails/PersonDetails';

import './main.css';
import Item from 'antd/lib/list/Item';

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

const Row = ({ left, right }) => {
    return (
        <div className='row md2'>
            <div className='col-md-6'>
                {left}
            </div>
            <div className='col-md-6'>
                {right}
            </div>
        </div>
    );
};

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
                renderItem={({ name, birth_year, eye_color }) => `${name} (${birth_year}, ${eye_color})`} />
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        );

        const itemListPlanet = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getApiPlanet}
                renderItem={({ name, diameter, population }) => `${name} (diametr: ${diameter}, population: ${population})`} />
        );

        const itemListStarship = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getApiStarship}
                renderItem={(item) => item.name} />
        );

        return (
            <div className='main-container' >
                <Header />
                <RandomPlanet />
                <Row left={itemListPeople} right={personDetails} />
                <Row left={itemListPlanet} right='' />
                <Row left={itemListStarship} right='' />
            </div>
        );
    };

}

ReactDOM.render(<App />, document.getElementById('root'));


