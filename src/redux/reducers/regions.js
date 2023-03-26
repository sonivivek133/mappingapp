import { createSlice } from "@reduxjs/toolkit";

export const regionSlice = createSlice({
  name: "region",
  initialState: {
    name: "",
    bbox: [],
    lat: 0,
    lon: 0,
    cardData: {
      currency_symbol: "",
      timezones: [],
      units: {
        speed: "",
        distance: "",
        volume: "",
      },
    },
  },
  reducers: {
    setRegion: (state, action) => {
      state.name = action.payload.name;
      state.bbox = action.payload.bbox;
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
      state.cardData = action.payload.cardData;
    },
  },
});

export const { setRegion } = regionSlice.actions;

export default regionSlice.reducer;
