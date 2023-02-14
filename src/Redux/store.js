import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { contactsFilter } from './filterSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  [contactsFilter.name]: contactsFilter.reducer,
  [contactsSlice.name]: contactsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer
});

