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

//устанавливает в качестве children любую функцию компоненту
const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

//это ItemList с рендер-функцией
const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({model,name}) => {
return(
    <span>{name} ({model})</span>
)
};

const PersonList = withData(
    withChildFunction(ItemList, renderName),
    getApiPeople);

const PlanetList = withData(
    withChildFunction(ItemList, renderName),
    getApiPlanet);

const StarshipList = withData(
    withChildFunction(ItemList, renderModelAndName),
    getApiStarship);

export {
    PersonList,
    PlanetList,
    StarshipList,
}