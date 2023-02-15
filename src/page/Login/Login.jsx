import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';

const Login = () => {
  return (
    <Grid
      container
      component="main"
      sx={{
        height: '100vh',
        py: 6,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h7" component="h7" marginBottom="15px">
            Welcome to my SimplePhonebook. To use all the functionality,
            register or log in.
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <LoginForm />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
