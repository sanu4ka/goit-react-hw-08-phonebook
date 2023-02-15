import { addContact } from '../../redux/contactsOperation';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const onSubmiting = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;

    if (contacts.find(contact => contact.name === name.value)) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = {
      name: name.value,
      number: number.value,
    };

    dispatch(addContact(newContact));
    e.target.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmiting}
      sx={{
        mt: 1,
        textAlign: 'center',
      }}
    >
      <TextField
        margin="normal"
        fullWidth
        label="Name"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        autoComplete="name"
        autoFocus
        required
      />
      <TextField
        margin="normal"
        fullWidth
        name="number"
        label="Number"
        type="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 3 }}>
        Add contact
      </Button>
    </Box>
  );
}
