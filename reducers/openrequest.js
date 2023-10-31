import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: null,
  },
};

export const openRequestSlice = createSlice({
  name: "openrequest",
  initialState,
  reducers: {
    openRequest: (state, action) => {
      console.log(action.payload);
      state.value = {
        ...state.value,
        id: action.payload.id,
      };
    },
    clearRequest: (state, action) => {
      state.value = {
        ...state.value,
        id: null,
      };
    },
  },
});

export const { openRequest, clearRequest } = openRequestSlice.actions;
export default openRequestSlice.reducer;
