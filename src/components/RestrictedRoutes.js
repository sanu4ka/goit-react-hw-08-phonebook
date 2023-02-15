import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import authorizationSelectors from '../reduxx/authorizationSelectors';

export default function PublicRoutes({ restricted = false }) {
  const isLoggedIn = useSelector(authorizationSelectors.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="contacts" /> : <Outlet />;
}
