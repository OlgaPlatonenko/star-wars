export default class SwapiService {


    //_apiBase = ' https://jsonplaceholder.typicode.com/photos';

    _apiBase = 'https://swapi.dev/api';

    getApiSwapi = async (url) => {
        const resp = await fetch(`${this._apiBase}${url}`);
        if (!resp.ok) {
            return Error(resp.status);
        };
        const body = await resp.json();
        return body;
    };

    getApiPeople = async () => {
        const persons = await this.getApiSwapi(`/people/`);
        return persons.results;
    }

    getApiPerson = async (id) => {
        return this.getApiSwapi(`/people/${id}`);
    }

    getApiPlanet = async () => {
        const planets = await this.getApiSwapi(`/planets/`);
        return planets.results.map(item => this._transformPlanet(item));
    }

    getApiPlanetById = async (id) => {
        const res = await (this.getApiSwapi(`/planets/${id}`));
        return this._transformPlanet(res);
    }

    getApiStarship = async () => {
        const ships = await this.getApiSwapi(`/starships`);
        return ships.results;
    }

    _transformPlanet(planets) {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = planets.url.match(idRegExp)[1];
        return {
            id,
            name: planets.name,
            population: planets.population,
            rotation_period: planets.rotation_period,
            diameter: planets.diameter,
        }

    }
}
