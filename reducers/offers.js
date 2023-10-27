import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: null,
    firstname: null,
  },
};

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    offersConcierge: (state, action) => {
      console.log("redux", action.payload);
      if (action.payload && action.payload.username) {
        state.value = {
          ...state.value,
          username: action.payload.username,
          firstname: action.payload.firstname,
        };
      }
    },
  },
});

export const { offersConcierge } = offersSlice.actions;
export default offersSlice.reducer;
