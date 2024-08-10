import { createSlice } from "@reduxjs/toolkit";
import { StoriesModal } from "../ReducersTypes";

const initialState: StoriesModal = {
  showModal: false,
};

const storiesModalSlice = createSlice({
  name: "StoriesModalSlice",
  initialState,
  reducers: {
    setShowModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

export const { setShowModal } = storiesModalSlice.actions;

export default storiesModalSlice.reducer;
