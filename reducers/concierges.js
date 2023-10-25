import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    token: null,
    username: null,
    firstname: null,
    lastname: null,
    status: null,
    photo: null,
  },
};

export const conciergeSlice = createSlice({
  name: "concierges",
  initialState,
  reducers: {
    loginConcierge: (state, action) => {
      console.log("redux", action.payload);
      state.value = {
        ...state.value,
        token: action.payload.token,
        username: action.payload.username,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        status: action.payload.status,
        photo: action.payload.photo,
      };
    },
    logoutConcierge: (state) => {
      // Use Immer to create a new state object with the desired changes
      state.value = {
        ...state.value,
        token: null,
        username: null,
        firstname: null,
        lastname: null,
        status: null,
        photo: null,
      };
    },
  },
});

export const { loginConcierge, logoutConcierge } = conciergeSlice.actions;
export default conciergeSlice.reducer;
