import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: null,
    firstname: null,
  },
};

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    offersConcierge: (state, action) => {
      console.log(action.payload);
      state.value = {
        ...state.value,
        id: action.payload.id,
        firstname: action.payload.firstname,
      };
    },
  },
});

export const { offersConcierge } = offersSlice.actions;
export default offersSlice.reducer;
