import { createSlice } from '@reduxjs/toolkit';

export const contactsFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filteredContacts(state, action) {
      return action.payload;
    },
  },
});

export const { filteredContacts } = contactsFilter.actions;
