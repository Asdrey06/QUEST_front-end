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

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      // Use Immer to create a new state object with the desired changes
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
    logoutUser: (state) => {
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

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
