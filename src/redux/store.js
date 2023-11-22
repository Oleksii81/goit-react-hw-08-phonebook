import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from "./Filter/filterSlice";
import { contactsReducer } from './Contacts/contactsSlice';
import { authReducer } from './Auth/auth-slice';
import { 
  persistStore, 
  persistReducer, 
  FLUSH, 
  REHYDRATE, 
  PAUSE, 
  PERSIST, 
  PURGE, 
  REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

const filterPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['selectedCheckedCheckbox'],
};
  
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
  filter: persistReducer(filterPersistConfig, filterReducer)
})

export const store = configureStore({ reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
