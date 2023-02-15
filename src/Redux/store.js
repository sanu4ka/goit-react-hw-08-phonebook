import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { contactsFilter } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import { authorizationSlice } from './authorizationSlice';

const authorizationPersistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    authorization: persistReducer(
      authorizationPersistConfig,
      authorizationSlice.reducer
    ),
    contacts: contactsSlice.reducer,
    filter: contactsFilter.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
