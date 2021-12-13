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
        return persons.results.map(this._transformPeople);
    }

    getApiPerson = async (id) => {
        const person = await this.getApiSwapi(`/people/${id}`);
        return this._transformPeople(person);
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

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {       
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotation_period: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    _transformPeople = (person) => {       
        return {
            id: this._extractId(person),
            name: person.name,
            birth_year: person.birth_year,
            eye_color: person.eye_color,
        }
    }
}
