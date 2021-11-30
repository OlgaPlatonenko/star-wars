const _apiBase = 'https://swapi.dev/api';

const getApiSwapi = async (url) => {
    const resp = await fetch(`${_apiBase}${url}`);
    if (!resp.ok) {
        return Error(resp.status);
    };
    const body = await resp.json();
    return body;
};

export const getApiPeople = async () => {
    const persons = await getApiSwapi(`/people/`);
    return persons.results;
}

export const getApiPerson = async (id) => {
    return getApiSwapi(`/people/${id}`);
}

export const getApiPlanet = async () => {
    const planets = await getApiSwapi(`/planets/`);
    return planets.results;
}

export const getApiStarship = async () => {
    const ships = await getApiSwapi(`/starships`);
    return ships.results;
}

