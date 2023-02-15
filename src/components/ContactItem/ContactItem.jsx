import css from './ContactItem.module.css';
import { deleteContact } from '../../reduxx/contactsOperation';
import { useDispatch } from 'react-redux';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.listItem} key={id}>
      <p className={css.contact}>
        {name}: <span className={css.number}> {number}</span>
      </p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
