import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import contactsSelectors from '../../redux/contactsSelectors';
import List from '@mui/material/List';

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
    <List sx={{ width: 1 }}>
      {filteredContacts.map(({ name, id, number }) => (
        <ContactItem key={id} contact={{ name, id, number }} />
      ))}
    </List>
  );
};

export default ContactList;
