import React, { Component } from 'react';
import SwapiService from '../../api/swapi';

import Card from 'react-bootstrap/Card';

import './ItemDetails.css';

const Record = ({ item, field, label }) => {
    return (
        <div>
            <Card.Title>
                {label}
                <Card.Text>
                    {item[field]}
                </Card.Text>
            </Card.Title>

        </div>
    );
}

export {
    Record
}

export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        item: {},
        image: null,
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId || this.props.getData !== prevProps.getData) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                });
            })
    };

    render() {
        const { id, name, birth_year, gender, eye_color } = this.state.item;
        const item = this.state.item;
        const { image } = this.state;

        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Title>{name}</Card.Title>
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item });
                        })
                    }
                </Card>
            </div>
        );
    };
}
/*
const PersonDetails = ({ name, id }) => {

 return (
        <div>
            PersonDetails
            <div> {name}</div>
            <div>{id}</div>
            <img className='person-details_card'
                src='https://starwars-visualguide.com/assets/img/characters/3.jpg'></img>
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}></img>
            <h4>R2-D2</h4>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Gender</li>
                <li className='list-group-item'>Birth year</li>
                <li className='list-group-item'>Eye color</li>
            </ul>
        </div>
    );
}

export default PersonDetails;*/