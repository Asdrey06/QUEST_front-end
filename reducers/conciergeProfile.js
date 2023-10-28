import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    openConcierge: (state, action) => {
      console.log(action.payload);
      state.value = {
        ...state.value,
        id: action.payload.id,
        firstname: action.payload.firstname,
        photo: action.payload.photo,
        aboutme: action.payload.aboutme,
        skills: action.payload.skills,
        lanauges: action.payload.languages,
        reviews: action.payload.reviews,
      };
    },
  },
});

export const { openConcierge } = conciergeProfileInfoSlice.actions;
export default conciergeProfileInfoSlice.reducer;
