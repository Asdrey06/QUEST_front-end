import { createSlice } from "@reduxjs/toolkit";

export type UserState = {
  value: {
    token: string | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    status: string | null;
    photo: string | null;
  };
};

const initialState: UserState = {
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
