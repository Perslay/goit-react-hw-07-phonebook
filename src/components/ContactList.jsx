import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';
import { Contact } from './Contact';
import css from '../styles/ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = (contacts, filter) => {
    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
