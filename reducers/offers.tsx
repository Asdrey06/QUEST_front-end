import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OffersState {
  value: {
    id: string | null;
    firstname: string | null;
    photo: string | null;
  };
}

const initialState: OffersState = {
  value: {
    id: null,
    firstname: null,
    photo: null,
  },
};

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    offersConcierge: (
      state,
      action: PayloadAction<{
        id: string | null;
        firstname: string | null;
        photo: string | null;
      }>
    ) => {
      console.log(action.payload);
      state.value = {
        ...state.value,
        id: action.payload.id,
        firstname: action.payload.firstname,
        photo: action.payload.photo,
      };
    },
  },
});

export const { offersConcierge } = offersSlice.actions;
export default offersSlice.reducer;
