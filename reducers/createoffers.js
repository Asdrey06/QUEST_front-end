import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  concierge: null,
  instructions: null,
  date: null,
  offer: null,
  goods: null,
};

export const createofferSlice = createSlice({
  name: "createoffers",
  initialState,
  reducers: {
    setConcierge: (state, action) => {
      state.concierge = action.payload;
    },
    setInstructions: (state, action) => {
      state.instructions = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setOffer: (state, action) => {
      state.offer = action.payload;
    },
    setGoods: (state, action) => {
      state.goods = action.payload;
    },
    clearAll: (state, action) => {
      state.concierge = null;
      state.instructions = null;
      state.date = null;
      state.offer = null;
      state.goods = null;
    },
  },
});

export const {
  setConcierge,
  setInstructions,
  setDate,
  setOffer,
  setGoods,
  clearAll,
} = createofferSlice.actions;
export default createofferSlice.reducer;
