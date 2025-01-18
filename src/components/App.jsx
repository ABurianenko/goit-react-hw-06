import initialContacts from './ContactList/contacts.json'
import { useState, useEffect } from 'react'
import s from './App.module.css'

import ContactForm from './ContactForm/contactForm'
import SearchBox from './SearchBox/searchBox'
import ContactList from './ContactList/contactList'

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  }

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm contacts={contacts} onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      {filteredContacts.length ? (
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      ) : (
        <p>No contact in your list</p>
      )}
    </div>
  )
}

export default App;
