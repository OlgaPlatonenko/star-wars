import React, { Component } from 'react';
import SwapiService from '../../api/swapi';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import './ItemList.css';

export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: null,
    };

    componentDidMount() {
        this.swapiService
            .getApiPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList,
                });
            });
    }


    renderItems(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li
                    className='list-group-item'
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    };

    render() {

        const { peopleList } = this.state;

        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

        if (!peopleList) {
            return <Spin indicator={antIcon} />;
        }

        const itemPeople = this.renderItems(peopleList);

        return (
            <div>
                {itemPeople}
            </div>
        )
    }
}

/*const ItemList = () => {

    const [persons, setPersons] = useState([]);
    const [activePerson, setActivePerson] = useState(true);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getApiPeople()
            .then((persons) => {
                setPersons(persons);
            })
           // .catch(setError(true));
    }, []);

    let element = null;

    if (!error) {
        element = persons.map(item => {
            const { name } = item;
            return (
                <li key={name} >
                    {name}
                </li>
            );
        });
    };

    console.log(error);

    return (
        <div className='itemlist-container'>
            {
                (activePerson && !error) ?
                    <PersonDetails name={'persons[1]'} />
                    :
                    <h3>false</h3>
            }

            {error ?
                <div>
                    <ErrorIndicator />
                </div>
                :
                <ul>
                    {element}
                </ul>
            }

        </div>
    );
}

export default ItemList;*/
