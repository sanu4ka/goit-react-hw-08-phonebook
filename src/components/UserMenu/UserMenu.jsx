import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import authorizationSelectors from '../../reduxx/authorizationSelectors';
import { userLogout } from '../../reduxx/authorizationOperation';

export const UserMenu = () => {
  const userEmail = useSelector(authorizationSelectors.getUserEmail);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography component="p" sx={{ mr: 2 }}>
        {userEmail}
      </Typography>
      <Button
        variant="outlined"
        color="inherit"
        size="small"
        onClick={() => dispatch(userLogout())}
      >
        Log out
      </Button>
    </Box>
  );
};
