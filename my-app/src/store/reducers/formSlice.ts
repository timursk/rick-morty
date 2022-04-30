import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { storeForm } from '../../types/store/storeForm';
import initialAppState from '../initialAppState';
import { RootState } from '../store';

const initialState = { ...initialAppState.form };

export const formReducer = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveForm: (state, action: PayloadAction<storeForm>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.birthDate = action.payload.birthDate;
      state.country = action.payload.country;
      state.consent = action.payload.consent;
      state.notify = action.payload.notify;
      state.profilePicture = action.payload.profilePicture;
    },
  },
});

export const { saveForm } = formReducer.actions;

export const selectForm = (state: RootState) => state;

export default formReducer.reducer;
