import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConciergeProfileState {
  id: string | null;
  firstname: string | null;
  photo: string | null;
  aboutme: string | null;
  skills: string | null;
  languages: string | null;
  reviews: string | null;
}

interface InitialState {
  value: ConciergeProfileState;
}

const initialState: InitialState = {
  value: {
    id: null,
    firstname: null,
    photo: null,
    aboutme: null,
    skills: null,
    languages: null,
    reviews: null,
  },
};

export const conciergeProfileInfoSlice = createSlice({
  name: "conciergeprofile",
  initialState,
  reducers: {
    openConcierge: (
      state,
      action: PayloadAction<Partial<ConciergeProfileState>>
    ) => {
      console.log(action.payload);
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },
  },
});

export const { openConcierge } = conciergeProfileInfoSlice.actions;
export default conciergeProfileInfoSlice.reducer;
