import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    ids: [],
  },
  reducers: {
    addfavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removefavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});
export const store = configureStore({
  reducer: {
    favoritemeals: favoriteSlice.reducer,
  },
});
export const addfavorite = favoriteSlice.actions.addfavorite;
export const removefavorite = favoriteSlice.actions.removefavorite;
