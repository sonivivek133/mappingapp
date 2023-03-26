import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "./reducers/regions";
export default configureStore({
  reducer: {
    region: regionReducer,
  },
});
