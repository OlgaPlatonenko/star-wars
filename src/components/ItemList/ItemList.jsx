import React, { Component } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import './ItemList.css';

export default class ItemList extends Component {


    state = {
        itemList: null,
    };

    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList,
                });
            });
    }


    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item;

            const label = this.props.renderItem(item);
            return (
                <li
                    className='list-group-item'
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            );
        });
    };

    render() {

        const { itemList } = this.state;

        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

        if (!itemList) {
            return <Spin indicator={antIcon} />;
        }

        const itemPeople = this.renderItems(itemList);

        return (
            <div className='row mb2'>
                <div className='col-md-12'>
                    {itemPeople}
                </div>
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
