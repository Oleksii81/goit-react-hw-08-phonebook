export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter.filter;
export const selectLoading = state => state.contacts.isLoading;
export const selectCheckbox = state => state.contacts.selectedCheckedCheckbox;
export const selectIDForModal = state => state.contacts.selectedIDForModal;