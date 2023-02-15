import ContactForm from '../../components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contactsOperation';
import { useEffect } from 'react';
import Filter from 'components/Filter/Filter';
import { isContactsLoading, getContacts } from '../../redux/contactsSelectors';
import { Box, Typography } from '@mui/material';
import { Loader } from 'components/Loader/Loader';

const Contacts = () => {
  const isLoading = useSelector(isContactsLoading);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      component="main"
      sx={{
        mb: 'auto',
        px: 4,
        py: 12,
        display: 'flex',
        alignItems: 'top',
      }}
    >
      <Box
        maxWidth="360px"
        sx={{
          mx: 4,
        }}
      >
        <Typography variant="h5" component="p">
          Fill to add a contact
        </Typography>
        <ContactForm />
      </Box>
      <Box
        sx={{
          mx: 4,
          flexGrow: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" component="p" sx={{ mx: 3 }}>
            Contacts
          </Typography>
          <Filter />
        </Box>
        {isLoading ? <Loader /> : contacts.length !== 0 && <ContactList />}
      </Box>
    </Box>
  );
};

export default Contacts;
