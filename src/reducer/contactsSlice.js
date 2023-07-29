import { createSlice } from '@reduxjs/toolkit';
import { fetchAll, createNewContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAll.pending](state) {
      state.isLoading = true;
    },
    [fetchAll.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    [fetchAll.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [createNewContact.pending](state) {
      state.isLoading = true;
    },
    [createNewContact.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts.push(action.payload);
    },
    [createNewContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
