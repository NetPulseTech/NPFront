import { createSlice } from "@reduxjs/toolkit";
import { LayoutSliceInterFace } from "../ReducersTypes";

const initialState: LayoutSliceInterFace = {
  imageLink: "user-sm/15.jpg",
  backgroundImage: "cover/1.jpg",
};

export const LayoutSlice = createSlice({
  name: "LayoutSlice",
  initialState,
  reducers: {
    setImageLink: (state, action) => {
      state.imageLink = action.payload;
    },
    setBackgroundImage: (state, action) => {
      state.backgroundImage = action.payload;
    },
  },
});

export const { setImageLink,setBackgroundImage } = LayoutSlice.actions;

export default LayoutSlice.reducer;
