import PropTypes from 'prop-types';
import s from './ContactsList.module.css'

 export default function ContactsList ({contacts, onDeleteContact}) {
    
        return (
            <ul className={s.contactList} >
                {contacts.map(({ id, name, number }) => (
                    <li className={s.contactItem} key={id}>
                        {name} {number} 
                        <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        )
    
}

ContactsList.prototype = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
           id: PropTypes.string.isRequired,
           name: PropTypes.string.isRequired,
           number: PropTypes.number.isRequired
       })
    ).isRequired,
    onDeleteContact: PropTypes.func
}