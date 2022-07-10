import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SwapiService from "./api/swapi";
import DummySwapiService from './api/dummy-swapi-service';
import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';
import { SwapiServiceProvider } from './components/swapi-service-context';
import { PeoplePage, PlanetPage, StarshipPage } from './components/pages';
import './main.css';

export default class App extends Component {

    state = {
        selectedPerson: 2,
        swapiService: new SwapiService(),
    };

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id,
        });
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
            console.log('service changed', Service.name);
            return {
                swapiService: new Service()
            };
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

        /*   const itemDetails = (
               <ItemDetails
                   getData={this.state.swapiService.getApiPerson}
                   getImageUrl={this.state.swapiService.getPersonImage}
                   itemId={this.state.selectedPerson}
               />
           );*/


        /*   const { getApiPerson,
               getApiStarshipById,
               getPersonImage,
               getStarshipImage } = this.state.swapiService;*/

        /*    const personDetails = (
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
            ) */

        return (
            <SwapiServiceProvider value={this.state.swapiService}>
                <div className='main-container' >
                    <Header onServiceChange={this.onServiceChange} />
                    <RandomPlanet />
                    <ErrorBoundry>
                        <PeoplePage />
                        <PlanetPage />
                        <StarshipPage />                       
                    </ErrorBoundry>
                </div>
            </SwapiServiceProvider>
        );
    };

}

ReactDOM.render(<App />, document.getElementById('root'));


