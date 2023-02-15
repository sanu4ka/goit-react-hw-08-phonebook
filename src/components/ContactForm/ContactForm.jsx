import css from './ContactForm.module.css';
import { addContact } from '../../reduxx/contactsOperation';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

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
      id: nanoid(),
      name: name.value,
      phone: number.value,
    };

    dispatch(addContact(newContact));
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={onSubmiting}>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
