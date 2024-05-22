// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import css from '../styles/App.module.css';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';

export const App = () => {
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
