import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { onRemove } from '../../redux/contacts';
import RenderContact from '../RenderContact/RenderContact';

const ContactList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.list);
    console.log(contacts)
    const filter = useSelector(state => state.filter);
    console.log(filter);
    const makeContactsFilter = filterName => {
        if (filterName) {
            return contacts.filter(
                ({name}) => name.toLowerCase().includes(filterName))
                
        }
        return contacts;
    }
    
    const filteredContacts = makeContactsFilter(filter);
    console.log(filteredContacts)

    const deleteContact = (itemId) => dispatch(onRemove(itemId));
    

    return (

        <ul>
            {filteredContacts.map(({id, name, number}) => (<RenderContact key={id} name={name} number={number} onDeleteContact={() => deleteContact(id)}/>))}
        </ul>
    )
}


export default ContactList;

ContactList.propTypes = {
    data: PropTypes.array,
    id: PropTypes.string,
}
