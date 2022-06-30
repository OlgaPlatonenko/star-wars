import React from 'react';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { withSwapiService } from '../hoc';

const PersonDetails = ({ itemId, swapiService }) => {
    const {getApiPerson,getPersonImage} = swapiService;

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

export default withSwapiService(PersonDetails);