import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import authorizationSelectors from '../reduxx/authorizationSelectors';
import { Navigate, Route, Routes } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './RestrictedRoutes';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { refreshUser } from '../reduxx/authorizationOperation';

const Login = lazy(() => import('../page/Login/Login'));
const Register = lazy(() => import('../page/Register/Register'));
const Contacts = lazy(() => import('../page/Contacts/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authorizationSelectors.isCurrentUserLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#7c588a',
      },
      secondary: {
        main: '#369cac',
      },
    },
  });
  return (
    <>
      {!isLoading && (
        <div>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Navigate to="login" />} />
                <Route element={<PublicRoutes restricted />}>
                  <Route path="login" element={<Login />} />
                </Route>
                <Route element={<PublicRoutes restricted />}>
                  <Route path="register" element={<Register />} />
                </Route>
                <Route element={<PrivateRoutes />}>
                  <Route path="contacts" element={<Contacts />} />
                </Route>
                <Route element={<PublicRoutes restricted />}>
                  <Route path="*" element={<Login />} />
                </Route>
              </Route>
            </Routes>
          </ThemeProvider>
        </div>
      )}
    </>
  );
}
