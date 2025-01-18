import Contact from '../Contact/contact'
import {contactList, contactItem} from './contactList.module.css'

const ContactList = ({contacts, onDelete}) => {
    return (
        <ul className={contactList}>
            {contacts.map((contact) =>
                <li className={contactItem} key={contact.id}>
                    <Contact data={contact} onDelete={onDelete}/>
                </li>
            )}
        </ul>
    )
}

export default ContactList;