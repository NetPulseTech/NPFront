import { createSlice } from "@reduxjs/toolkit";
import { FavouritePageSlice } from "../ReducersTypes";

const initialState: FavouritePageSlice = {
  queryValue: "",
};

 export const favouritePageSlice = createSlice({
  name: "favouritePageSlice",
  initialState,
  reducers: {
    setQueryValue: (state, action) => {
      state.queryValue = action.payload;
    },
  },
});

export const { setQueryValue } = favouritePageSlice.actions;

export default favouritePageSlice.reducer;
