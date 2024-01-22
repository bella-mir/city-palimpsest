import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "./app-types";
import { setSelectedFeature } from "./app-actions";

const initialState: IAppState = {};

export const appSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setSelectedFeature, (state, action) => ({
      ...state,
      selectedFeature: action.payload,
    }));
  },
});
