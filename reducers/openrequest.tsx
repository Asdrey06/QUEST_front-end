import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OpenRequestState {
  value: {
    id: string | null;
  };
}

const initialState: OpenRequestState = {
  value: {
    id: null,
  },
};

export const openRequestSlice = createSlice({
  name: "openrequest",
  initialState,
  reducers: {
    openRequest: (state, action: PayloadAction<{ id: string | null }>) => {
      console.log(action.payload);
      state.value = {
        ...state.value,
        id: action.payload.id,
      };
    },
    clearRequest: (state) => {
      state.value = {
        ...state.value,
        id: null,
      };
    },
  },
});

export const { openRequest, clearRequest } = openRequestSlice.actions;
export default openRequestSlice.reducer;
