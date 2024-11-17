import { createSlice } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './contactsOps';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlerPending = state => {
  state.isLoading = true;
};

const handlerRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContact.pending, handlerPending)
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContact.rejected, handlerRejected)
      .addCase(addContact.pending, handlerPending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handlerRejected)
      .addCase(deleteContact.pending, handlerPending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(task => task.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, handlerRejected);
  },
});

export const selectContacts = state => state.contacts.items;
const contactReducer = contactSlice.reducer;

export default contactReducer;
