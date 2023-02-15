const getUserEmail = state => state.authorization.user.email;
const isLoggedIn = state => state.authorization.isLoggedIn;
const isCurrentUserLoading = state => state.authorization.isLoading;

const authorizationSelectors = {
  getUserEmail,
  isLoggedIn,
  isCurrentUserLoading,
};
export default authorizationSelectors;
