import { useEffect } from 'react';
import { getContacts, getFilter } from '../redux/selectors';

import { useDispatch } from 'react-redux';
import css from '../styles/App.module.css';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { fetchContacts } from '../redux/operations';
import { useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.appContainer}>
      <h1 className={css.firstHeading}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.secondHeading}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
