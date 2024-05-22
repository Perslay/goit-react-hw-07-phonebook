import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const saveToLocalStorage = state => {
  try {
    const { filter, ...stateWithoutFilter } = state;
    const serializedState = JSON.stringify(stateWithoutFilter);
    localStorage.setItem('persistentState', serializedState);
  } catch (error) {
    console.warn(error);
  }
};

const getFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('persistentState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.warn(error);
    return undefined;
  }
};

const preloadedState = getFromLocalStorage();

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  preloadedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));
