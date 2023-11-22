import { createSlice } from '@reduxjs/toolkit';
import { addNewContact, getAllContacts, deleteContactById, updateContactById } from "./contactOperations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      contacts: [],
      isLoading: false,
      error: null,
    },
        
    extraReducers: builder => {
      builder
        .addCase(getAllContacts.pending, handlePending)
        .addCase(getAllContacts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.contacts = action.payload;
        })
        .addCase(getAllContacts.rejected, handleRejected) 
        .addCase(addNewContact.pending, handlePending)
        .addCase(addNewContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.contacts = [...state.contacts, action.payload];
        })
        .addCase(addNewContact.rejected, handleRejected)
        .addCase(deleteContactById.pending, handlePending)
        .addCase(deleteContactById.fulfilled, (state, action) => {
          const deletedContactId = action.payload;
          state.isLoading = false;
          state.error = null;
          state.contacts = state.contacts.filter(
            (contact) => contact.id !== deletedContactId
          );
        })
        .addCase(updateContactById.pending, state => {
          state.contacts.isLoading = true;
          state.error = null;
        })
        .addCase(updateContactById.fulfilled, (state, { payload }) => {
            state.contacts.isLoading = false;
            const updatedIndex = state.contacts.items.findIndex(contact => contact.id === payload.id);
            if (updatedIndex !== -1) {
                state.contacts.items[updatedIndex] = payload;
            }
        })
        .addCase(updateContactById.rejected, (state, { payload }) => {
            state.contacts.isLoading = false;
            state.error = payload;
        })
        .addCase(deleteContactById.rejected, handleRejected);
        
    },
  });
  
  export const contactsReducer = contactsSlice.reducer;