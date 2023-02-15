import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import contactsSelectors from '../../reduxx/contactsSelectors';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(state => state.filter);

  function getFiltered() {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  }

  const filteredContacts = getFiltered();

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ name, id, number }) => (
        <ContactItem key={id} contact={{ name, id, number }} />
      ))}
    </ul>
  );
};

export default ContactList;
