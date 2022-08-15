import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {setFilter} from '../../redux/filter';

const Filter = () => {

    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter.filterValue);
console.log(filter)
    const handleFilter = e => {
    const {value} = e.target;

    dispatch(setFilter(value));
console.log(filter)
    }

    return (
        <label> Find contacts by name
            <input type="text" onChange={handleFilter}/>
        </label>
    )
}

export default Filter;

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}
