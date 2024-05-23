import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    // fetchingInProgress(state) {
    //   state.isLoading = true;
    // },
    // fetchingSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    // },
    // fetchingError(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    extraReducers: builder => {
      builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, handleRejected)

        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items.push = action.payload;
        })
        .addCase(addContact.rejected, handleRejected)

        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          const index = state.items.findIndex(
            contact => contact.id === action.payload.id
          );
          state.items.splice(index, 1);
        })
        .addCase(deleteContact.rejected, handleRejected);
    },
    // addContact: {
    //   reducer(state, action) {
    //     state.push(action.payload);
    //   },
    //   prepare(name, number) {
    //     return {
    //       payload: {
    //         name,
    //         number,
    //         id: nanoid(),
    //       },
    //     };
    //   },
    // },
    // deleteContact(state, action) {
    //   const index = state.findIndex(contact => contact.id === action.payload);
    //   state.splice(index, 1);
    // },
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
