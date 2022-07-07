export default class DummySwapiService{
    _people = [
        {
            id:1, 
            name: 'Bilbo',
            birth_year: '1985',
            eye_color: 'grey',
        },
        {
            id:2, 
            name: 'olga',
            birth_year: '1981',
            eye_color: 'green',
        }
    ];

    _planet = [
        {
            id: 1,
            name: 'planet1',
            population: '1000',
            rotation_period: '555',
            diameter: '300',
        },
        {
            id: 2,
            name: 'planet2',
            population: '2000',
            rotation_period: '222',
            diameter: '200',
        }
    ];

    _startship = [
        {
        id: 1,
        name: 'starship1',
        model: 'model1',
        length: '1000', 
        },
        {
            id: 2,
            name: 'starship2',
            model: 'model2',
            length: '2000', 
            }
    ];

    getApiPeople = async () => {
        return this._people;
    }

    getApiPerson = async (id) => {
        return this._people[0];
    }

    getApiPlanet = async () => {
       return this._planet;
    }

    getApiPlanetById = async (id) => {
       return this._planet[0];
    }

    getApiStarship = async () => {
       return this._startship;
    }

    getApiStarshipById = async (id) => {
       return this._startship[0];
    }

    getPersonImage = ({id}) => {
        return  undefined
    }

    getStarshipImage = ({id}) => {
        return  undefined
    }

    getPlanetImage = ({id}) => {
        return  undefined
    }
}