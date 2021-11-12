export default class SwapiService {

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
        return planets.results;
    }

    getApiStarship = async () => {
        const ships = await this.getApiSwapi(`/starships`);
        return ships.results;
    }
}
