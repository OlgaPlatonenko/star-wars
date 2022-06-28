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

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList,
} from './components/sw-components'

const swapi = new SwapiService();

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

        /*    const itemListPeople = (
                <ItemList
                    onItemSelected={this.onItemSelected}
                    getData={this.swapiService.getApiPeople}
                >
                    {(i) => (
                        `${i.name} (${i.birth_year})`
                    )}
                </ItemList>
            );*/

        /*   const itemListPlanet = (
           <ItemList
               onItemSelected={this.onPersonSelected}
               getData={this.swapiService.getApiPlanet}
           >
               {(i) => (<span>{i.name} <button>!</button> {i.diameter} {i.population}</span>
               )}
           </ItemList>
       );*/

        /*   const itemListStarship = (
               <ItemList
                   onItemSelected={this.onPersonSelected}
                   getData={this.swapiService.getApiStarship}
               >
                   {(item) => item.name}
               </ItemList>
           );*/

        const itemDetails = (
            <ItemDetails
                getData={this.swapiService.getApiPerson}
                getImageUrl={this.swapiService.getPersonImage}
                itemId={this.state.selectedPerson}
            />
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
                <ErrorBoundry>
                    <PersonDetails itemId={11} />
                    <PlanetDetails itemId={5} />
                    <StarshipDetails itemId={12} />
                    <PersonList >
                        {({ name }) => <span>{name}</span>}
                    </PersonList>
                    <br />
                    <PlanetList>
                        {({ name }) => <span>{name}</span>}
                    </PlanetList>
                    <br />
                    <StarshipList>
                        {({ name }) => <span>{name}</span>}
                    </StarshipList>
                    <RandomPlanet />
                </ErrorBoundry>
            </div>
        );
    };

}

ReactDOM.render(<App />, document.getElementById('root'));


