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

export const getAllIdeas = createSelector(getAppState, (state) => state.ideas);

export const getUsersData = createSelector(getAllIdeas, (ideas) =>
  ideas?.filter((idea) => !idea.feedback)
);
export const getUsersFeedback = createSelector(getAllIdeas, (ideas) =>
  ideas?.filter((idea) => idea.feedback)
);
