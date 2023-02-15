import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import authorizationSelectors from '../redux/authorizationSelectors';

export default function PrivateRoutes() {
  const isLoggedIn = useSelector(authorizationSelectors.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="login" />;
}
