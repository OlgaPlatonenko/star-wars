import React from 'react';
import './ItemList.css';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

/*
class ItemList9 extends Component {

    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.children(item);

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

        const { data } = this.props;
        const itemPeople = this.renderItems(data);

        return (
            <ErrorBoundry>
                <div className='row mb2'>
                    <div className='col-md-12'>
                        {itemPeople}
                    </div>
                </div>
            </ErrorBoundry>
        )
    }
};
*/

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props;
    
    const items = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);

        return (
            <li
                className='list-group-item'
                key={id}
                onClick={() => onItemSelected(id)}
            >
                {label}
            </li>
        );
    }
    );

    return (
        <ErrorBoundry>
            <div className='row mb2'>
                <div className='col-md-12'>
                    {items}
                </div>
            </div>
        </ErrorBoundry>
    );
};


export default ItemList;

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
