import React from 'react';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { withSwapiService } from '../hoc';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}        >
            <Record field='name' label='Name' />
            <Record field='birth_year' label='Birth_year' />
            <Record field='eye_color' label='Eye color' />
        </ItemDetails>
    );
};

const mapServiceToProps = (swapiService) => {
    return {
        getData: swapiService.getApiPerson,
        getImageUrl: swapiService.getPersonImage,
    }
};

export default withSwapiService(PersonDetails, mapServiceToProps);