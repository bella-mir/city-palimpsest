import { createSelector } from "@reduxjs/toolkit";
import { TAppState } from "./app-types";

export const getAppState = (state: TAppState) => state["appState"];

export const getSelectedFeature = createSelector(
  getAppState,
  (state) => state.selectedFeature
);

export const getIsInfoShown = createSelector(
  getAppState,
  (state) => state.showInfo
);

export const getSelectedLayer = createSelector(
  getAppState,
  (state) => state.selectedLayer
);

export const getFilter = createSelector(getAppState, (state) => state.filter);
