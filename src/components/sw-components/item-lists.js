import React from 'react';
import { withData } from '../hoc';
import SwapiService from '../../api/swapi';
import ItemList from '../ItemList/ItemList';

const swapiService = new SwapiService();

const {
    getApiPeople,
    getApiStarship,
    getApiPlanet,
} = swapiService;

const PersonList = withData(ItemList,getApiPeople);

const PlanetList = withData(ItemList,getApiPlanet);

const StarshipList = withData(ItemList,getApiStarship);

export {
    PersonList,
    PlanetList,
    StarshipList,
}