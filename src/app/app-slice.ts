import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "./app-types";
import { setSelectedFeature, setShowInfo } from "./app-actions";

const initialState: IAppState = {
  layer: "buildings",
};

export const appSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setSelectedFeature, (state, action) => ({
      ...state,
      selectedFeature: action.payload,
    }));
    builder.addCase(setShowInfo, (state, action) => ({
      ...state,
      showInfo: action.payload,
    }));
  },
});
