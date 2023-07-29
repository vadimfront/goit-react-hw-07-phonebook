import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filterByName: '',
};

const filterContactsSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContactsByName(state, action) {
      state.filterByName = action.payload;
    },
  },
});

export const { filterContactsByName } = filterContactsSlice.actions;
export const filterContactsReducer = filterContactsSlice.reducer;
