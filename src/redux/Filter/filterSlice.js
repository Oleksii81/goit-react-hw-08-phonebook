import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
    selectedCheckedCheckbox: [],
    selectedIDForModal: '',
  },
  reducers: {
    filterValue(state, action) {
      state.filter = action.payload;
    },

    toggleCheckboxState: (state, action) => {
      const { contactId } = action.payload;
      const isSelected = state.selectedCheckedCheckbox.includes(contactId);
      if (isSelected) {
        state.selectedCheckedCheckbox = state.selectedCheckedCheckbox.filter(id => id !== contactId);
      } else {
        state.selectedCheckedCheckbox.push(contactId);
      }
    },

    toggleSelectAllCheckbox: (state) => {
      const filteredContactIds = state.contacts.items.filter((contact) => {
        return (
          contact.name.toLowerCase().includes(state.filter.toLowerCase()) ||
          contact.number.includes(state.filter)
        );
      }).map((contact) => contact.id);
  
      if (state.selectedCheckedCheckbox.length === filteredContactIds.length) {
        state.selectedCheckedCheckbox = [];
      } else {
        state.selectedCheckedCheckbox = [...filteredContactIds];
      }
    },

    setSelectedIDForModal: (state, {payload}) => {
      state.selectedIDForModal = payload;
    },
    
    clearSelectedIDForModal: (state) => {
      state.selectedIDForModal = '';
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterValue,
  setSelectedCountryCode, 
  toggleCheckboxState, 
  toggleSelectAllCheckbox,
  setSelectedIDForModal, 
  clearSelectedIDForModal, 
} = filterSlice.actions;