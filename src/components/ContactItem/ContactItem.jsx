import { deleteContact } from '../../redux/contactsOperation';
import { useDispatch } from 'react-redux';
import { ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <ListItem key={id}>
      <ListItemText primary={name} secondary={number} sx={{ maxWidth: 320 }} />
      <DeleteIcon
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      />
          </ListItem>
  );
};

export default ContactItem;
