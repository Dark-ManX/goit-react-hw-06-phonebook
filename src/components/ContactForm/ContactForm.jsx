import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import shortid from "shortid";
import styles from './ContactForm.module.css';
import { onAdd } from "../../redux/contacts";

const { labelStyles } = styles;

export default function ContactForm() {

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.list);
    console.log(contacts);
    

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInput = (e) => {
        const {name, value} = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
}    

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkName = contacts.find(el => (el.name.toLowerCase() === name.trim().toLowerCase()));
        const checkNumber = contacts.find(el => (el.number === number.trim()));
        
        console.log(checkName);
                console.log(checkNumber);

        if (!checkName || !checkNumber) {

            return dispatch(onAdd({
                id: shortid.generate(), 
                name, 
                number
            }));
        }

        alert('Sorry, but you already have equal contacts')
        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className={labelStyles}>
            Name
            <input
                value={name}
                onChange={handleInput}
                autoComplete='off'
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            </label>
            
            <label className={labelStyles}>
            Number
            <input
                value={number}
                onChange={handleInput}
                autoComplete='off'
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            </label>
            
            <button type="submit">Add contact</button>
        </form>
    )
}
