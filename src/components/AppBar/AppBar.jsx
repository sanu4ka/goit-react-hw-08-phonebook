import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@mui/material';
import authorizationSelectors from '../../redux/authorizationSelectors';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';

export const ApplicationBar = () => {
  const isLoggedIn = useSelector(authorizationSelectors.isLoggedIn);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
          My SimplePhonebook
        </Typography>
        {isLoggedIn ? (
          <>
            <UserMenu />
          </>
        ) : (
          <Navigation />
        )}
      </Toolbar>
    </AppBar>
  );
};
