import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SwapiService from "./api/swapi";
import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import ItemList from './components/ItemList/ItemList';
import PersonDetails from './components/PersonDetails/PersonDetails';

import './main.css';

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

    state = {
        selectedPerson: 5,
    };

    onPersonSelected = (id) => {       
        this.setState({
            selectedPerson: id,
        });
    };

    render() {
      //  alert(this.state.selectedPerson);
        return (
            <div className='main-container' >
                <Header />
                <RandomPlanet />
                <div className='main_body'>
                    <ItemList onItemSelected={this.onPersonSelected} />

                </div>
                <PersonDetails personId={this.state.selectedPerson} />

            </div>
        );
    };

}

ReactDOM.render(<App />, document.getElementById('root'));


