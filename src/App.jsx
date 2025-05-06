import { useMemo, useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce';
import './App.css'
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import ContactList from './components/contactList/ContactList';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("currentContacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
});
  const [filterValue, setFilterValue] = useState("");
  const [debouncedFilter] = useDebounce(filterValue, 500);


  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });

  };

  const deleteContact = (contactId) => {
    setContacts(prevContacts => {
      return prevContacts.filter((contacts) => contacts.id !== contactId);
    })
  };

  const visibleContacts = useMemo(() => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(debouncedFilter.toLowerCase())
  );
  }, [contacts, debouncedFilter]);
  
   useEffect(() => { localStorage.setItem('currentContacts', JSON.stringify(contacts)) }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filterValue} onFilter={setFilterValue} />
      <ContactList contactItems={visibleContacts} removeItem={deleteContact} />
    </div>
  );
}

export default App
