import { createSlice } from "@reduxjs/toolkit";
import { ShowMorePostSliceInterFace } from "../ReducersTypes";

const initialState: ShowMorePostSliceInterFace = {
  style1: [],
  style3: [],
  style4: [],
  style7: [],
  style12: [],
  favouriteHome: [],


  //   style2:[]
  //   style3:[]
  //   style4:[]
  //   style5:[]
  //   style6:[]
  //   style7:[]
  //   style8:[]
};

export const ShowMorePostSlice = createSlice({
  name: "ShowMorePostSlice",
  initialState,
  reducers: {
    handleNextPost: (
      state,
      action: { payload: "style1" | "style3" | "style4" | "style7" |"style12" |"favouriteHome" }
    ) => {
      const tempValue = action.payload;
      const temp = [...state[tempValue]];
      temp.push(state[tempValue].length);
      state[tempValue] = temp;
    },
  },
});

export const { handleNextPost } = ShowMorePostSlice.actions;

export default ShowMorePostSlice.reducer;
