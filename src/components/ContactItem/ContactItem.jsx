import css from './ContactItem.module.css';
import { deleteContact } from '../../Redux/contactsOperation';
import { useDispatch } from 'react-redux';

const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.listItem} key={id}>
      <p className={css.contact}>
        {name}: <span className={css.number}> {phone}</span>
      </p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
