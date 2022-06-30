import React from 'react';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { SwapiServiceConsumer } from '../swapi-service-context';
import { withSwapiService } from '../hoc';

const StarshipDetails = ({ itemId, swapiService }) => {
    const { getApiStarshipById, getStarshipImage } = swapiService;

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

export default withSwapiService(StarshipDetails);