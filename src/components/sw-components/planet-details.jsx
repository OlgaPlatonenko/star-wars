import React from 'react';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { withSwapiService } from '../hoc';

const PlanetDetails = ({ itemId, swapiService }) => {
    const { getApiPlanetById, getPlanetImage } = swapiService;
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
}

export default withSwapiService(PlanetDetails);