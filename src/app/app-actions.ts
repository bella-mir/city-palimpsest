import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "./app-types";
import { request } from "../utils";
import { API_URL } from "./app-constants";

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

export const postIdea = createAsyncThunk(
  `appState/postIdea`,
  async (data: any) => {
    return request(`${API_URL}/ideas`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    });
  }
);

export const fetchIdeas = createAsyncThunk(`appState/getIdeas`, async () => {
  return request(`${API_URL}/ideas`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
});
