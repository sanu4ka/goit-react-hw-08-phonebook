import { useDispatch } from 'react-redux';
import { filteredContacts } from '../../redux/filterSlice';
import { TextField, Box, Typography } from '@mui/material';
const Filter = () => {
  const dispatch = useDispatch();

  function onChange(e) {
    dispatch(filteredContacts(e.currentTarget.value));
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Typography variant="h6" component="p">
        Find contacts by name
      </Typography>
      <TextField
        onChange={onChange}
        margin="normal"
        fullWidth
        label="Name"
        name="filter"
        autoComplete="name"
        autoFocus
      />
    </Box>
  );
};

export default Filter;
