import React from 'react';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { withSwapiService } from '../hoc';

const PlanetDetails = (props) => {
  
    return (
        <ItemDetails {...props}  >
            <Record field='name' label='Name' />
            <Record field='diameter' label='Diameter' />
        </ItemDetails>
    );
};

const mapServiceToProps = (swapiService) => {
    return{
        getData: swapiService.getApiPlanetById,
        getImageUrl: swapiService.getPlanetImage,
    }
};

export default withSwapiService(PlanetDetails, mapServiceToProps);