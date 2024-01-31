import { createAction } from "@reduxjs/toolkit";
import { AppThunk } from "./app-types";

export const setSelectedFeature = createAction(
  `appState/setSelectedFeature`,
  (payload: any) => ({
    payload,
  })
);

export const setShowInfo = createAction(
  `appState/setShowInfo`,
  (payload: any) => ({
    payload,
  })
);

export const setSelectedLayer = createAction(
  `appState/setSelectedLayer`,
  (payload: "buildings" | "spots" | "parks") => ({
    payload,
  })
);

export const setNewSelectedLayer =
  (payload: "buildings" | "spots" | "parks"): AppThunk =>
  (dispatch) => {
    dispatch(setSelectedFeature(undefined));
    dispatch(setShowInfo(false));
    dispatch(setSelectedLayer(payload));
  };

export const setFilter = createAction(
  `appState/setFilter`,
  (payload: "all" | 1 | 2 | 3 | 4 | 5 | 6 | 7) => ({
    payload,
  })
);
