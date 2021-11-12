import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SwapiService from "./api/swapi";
import Header from './components/Header/Header';

const swapi = new SwapiService();
swapi.getApiPeople().then(
    (people) => {
        console.log(people);
    });

swapi.getApiPlanet().then(
    (planets) => {
        console.log(planets);
    });

swapi.getApiStarship().then(
    (startships) => {
        console.log(startships);
    }
);

export default class App extends Component {

    render() {
        return (
            <div  >
                <Header/>
            </div>
        );
    };

}

ReactDOM.render(<App />, document.getElementById('root'));


