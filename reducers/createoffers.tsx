import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateOfferState {
  concierge: string | null;
  instructions: string | null;
  date: string | null;
  offer: string | null;
  goods: string | null;
}

const initialState: CreateOfferState = {
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
    setConcierge: (state, action: PayloadAction<string | null>) => {
      state.concierge = action.payload;
    },
    setInstructions: (state, action: PayloadAction<string | null>) => {
      state.instructions = action.payload;
    },
    setDate: (state, action: PayloadAction<string | null>) => {
      state.date = action.payload;
    },
    setOffer: (state, action: PayloadAction<string | null>) => {
      state.offer = action.payload;
    },
    setGoods: (state, action: PayloadAction<string | null>) => {
      state.goods = action.payload;
    },
    clearAll: (state) => {
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
