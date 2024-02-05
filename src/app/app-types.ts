import {
  Action,
  AnyAction,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

export interface IAppState {
  selectedFeature?: any;
  showInfo?: boolean;
  selectedLayer: "buildings" | "spots" | "parks";
  filter: "all" | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  status?: string;
  ideas?: any[];
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
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
