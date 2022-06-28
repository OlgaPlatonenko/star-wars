import React from 'react';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import SwapiService from '../../api/swapi';

const swapiService = new SwapiService();

const {
    getApiPerson,
    getApiPlanetById,
    getApiStarshipById,
    getPersonImage,
    getPlanetImage,
    getStarshipImage,
} = swapiService;

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getApiPerson}
            getImageUrl={getPersonImage}
        >
            <Record field='name' label='Name' />
            <Record field='birth_year' label='Birth_year' />
            <Record field='eye_color' label='Eye color' />
        </ItemDetails>
    );
};

const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getApiPlanetById}
            getImageUrl={getPlanetImage}
        >
            <Record field='name' label='Name' />
            <Record field='diameter' label='Diameter' />
        </ItemDetails>
    );
};

const StarshipDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getApiStarshipById}
            getImageUrl={getStarshipImage}
        >
            <Record field='model' label='Model' />
            <Record field='length' label='Length' />
        </ItemDetails>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
}