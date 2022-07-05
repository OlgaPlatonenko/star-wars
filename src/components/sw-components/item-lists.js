import React from 'react';
import { withData, withSwapiService } from '../hoc';
import ItemList from '../ItemList/ItemList';

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
const renderModelAndName = ({ model, name }) => {
    return (
        <span>{name} ({model})</span>
    )
};

const mapPersonToProps = (swapiService) => {
    return {
        getData: swapiService.getApiPeople
    }
};

const mapPlanetToProps = (swapiService) => {
    return {
        getData: swapiService.getApiPlanet
    }
};

const mapStarshipToProps = (swapiService) => {
    return {
        getData: swapiService.getApiStarship
    }
};

const PersonList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderName)),
    mapPersonToProps);

const PlanetList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderName)),
    mapPlanetToProps);

const StarshipList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderModelAndName)),
    mapStarshipToProps);

export {
    PersonList,
    PlanetList,
    StarshipList,
}