export const getContacts = state => state.contacts.items;
export const isContactsLoading = state => state.contacts.isLoading;

const contactsSelectors = {
  getContacts,
  isContactsLoading,
};
export default contactsSelectors;
