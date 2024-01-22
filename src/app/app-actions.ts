import { createAction } from "@reduxjs/toolkit";

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
