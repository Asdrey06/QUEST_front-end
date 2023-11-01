import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConciergeState {
  value: {
    token: string | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    status: string | null;
    photo: string | null;
  };
}

const initialState: ConciergeState = {
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
    loginConcierge: (
      state,
      action: PayloadAction<Partial<ConciergeState["value"]>>
    ) => {
      console.log("redux", action.payload);
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },
    logoutConcierge: (state) => {
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
