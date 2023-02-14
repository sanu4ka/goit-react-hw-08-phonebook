import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filteredContacts } from '../../Redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  function onChange(e) {
    dispatch(filteredContacts(e.currentTarget.value));
  }

  return (
    <div className={css.filter}>
      <p className={css.title}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
