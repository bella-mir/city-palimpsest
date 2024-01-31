import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "./app-types";
import {
  setSelectedFeature,
  setShowInfo,
  setSelectedLayer,
  setFilter,
} from "./app-actions";

const initialState: IAppState = {
  selectedLayer: "buildings",
  filter: "all",
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
    builder.addCase(setSelectedLayer, (state, action) => ({
      ...state,
      selectedLayer: action.payload,
    }));
    builder.addCase(setFilter, (state, action) => ({
      ...state,
      filter: action.payload,
    }));
  },
});
