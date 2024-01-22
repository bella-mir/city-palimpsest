import {
  Action,
  AnyAction,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export interface IAppState {
  selectedFeature?: any;
  showInfo?: boolean;
  selectedLayer: "buildings" | "spots" | "parks";
}

export type TAppState = {
  appState: IAppState;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TAppState,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<TAppState, {} | undefined, AnyAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
