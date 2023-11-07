import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recentlyPlayedPreview: ''
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setRecentlyPlayedPreview: (state, action) => {
      state.recentlyPlayedPreview = action.payload;
    }
  }
});

export const { actions: playerActions } = playerSlice;

export const allPlayerActions = {
  ...playerActions
};

export default playerSlice.reducer;
