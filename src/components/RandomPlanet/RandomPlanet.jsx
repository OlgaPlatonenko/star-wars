import React, { Component, useEffect, useState } from 'react';
import { getApiPlanet } from '../../api/swapifunc';
import SwapiService from '../../api/swapi';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

    swapi = new SwapiService();

    state = {
        id: 1,
        name: null,
        population: null,
        rotation_period: null,
        diameter: null,
        loading: true,
        error: false,
    };


    constructor() {
        super();
        this.updatePlanet();

    };

    getRandomId() {
        return Math.floor(Math.random() * (20 - 1) + 1);
    }

     id = this.getRandomId();
    //id = 12000;
    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        });
    }
    updatePlanet() {
        this.swapi
            .getApiPlanetById(this.id)
            .then((planets) => {
                this.setState({
                    id: this.id,
                    name: planets.name,
                    population: planets.population,
                    rotation_period: planets.rotation_period,
                    diameter: planets.diameter,
                    loading: false,
                })
            })
            .catch(this.onError);

    };

    render() {
        const { id, name, population, rotation_period, diameter, loading, error } = this.state;

        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

        const spinner = loading ? <Spin indicator={antIcon} /> : null;
        const content = !(loading || error) ? <PlanetView planets={this.state} /> : null;
        const errorMessage = error ? <ErrorIndicator /> : null;

        return (
            <div className='randomplanet-container'>
                {spinner}
                {content}
                {errorMessage}
            </div>
        );
    }
}

const PlanetView = ({ planets }) => {
    const { id, name, population, rotation_period, diameter, loading } = planets;

    return (
        <React.Fragment>
            <img className='planet-img'
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} ></img>

            <div>
                <h4>{name} </h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span>Population</span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Rotation period</span>
                        <span>{rotation_period}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}
/*
const RandomPlanet = () => {


    const [planet, setPlanet] = useState({
        id: null,
        name: null,
        population: null,
        rotation_period: null,
        diameter: null,
    });

    const resp = () => {
        getApiPlanet().then(
            (planets) => {
                const id = getRandom(0, 9);
                setPlanet(planets[5]);
                console.log(planet.id);
            });
    }

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    useEffect(() => {
        resp();
    }, []);

    return (

    );
}

export default RandomPlanet;

*/