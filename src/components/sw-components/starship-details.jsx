import React from 'react';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { withSwapiService } from '../hoc';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}        >
            <Record field='model' label='Model' />
            <Record field='length' label='Length' />
        </ItemDetails>
    );
};

const mapServiceToProps = (swapiService) => {
    return {
        getData: swapiService.getApiStarshipById,
        getImageUrl: swapiService.getStarshipImage,
    }
}

export default withSwapiService(StarshipDetails, mapServiceToProps);