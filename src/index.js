import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SwapiService from "./api/swapi";
import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import ItemList from './components/ItemList/ItemList';
import PersonDetails from './components/PersonDetails/PersonDetails';

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

class ErrorBoundry extends Component {
    state = {
        hasError: false,
    }
    componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }

    render() {
        if (this.state.hasError) {
            return (<h1>ERROR</h1>);
        }
        return this.props.children;
    }
}

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
                {(i) => (`${i.name} (${i.birth_year})`
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
                {(i) => (`${i.name} (diametr: ${i.diameter}, population: ${i.population})`
                )}
            </ItemList>
        );

        const itemListStarship = (
            <ErrorBoundry>
                <ItemList
                    onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getApiStarship}
                >
                    {(item) => item.name}
                </ItemList>
            </ErrorBoundry>
        );

        return (
            <div className='main-container' >
                <Header />
                <ErrorBoundry>
                    <RandomPlanet />
                </ErrorBoundry>

                <Row left={itemListPeople} right={personDetails} />
                <Row left={itemListPlanet} right='' />
                <Row left={itemListStarship} right='' />
            </div>
        );
    };

}

ReactDOM.render(<App />, document.getElementById('root'));


