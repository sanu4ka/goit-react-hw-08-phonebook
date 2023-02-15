import { useDispatch } from 'react-redux';
import { userLogin } from '../../reduxx/authorizationOperation';
import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      userLogin({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 1,
        textAlign: 'center',
      }}
    >
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 3 }}>
        Sign In
      </Button>
    </Box>
  );
};
