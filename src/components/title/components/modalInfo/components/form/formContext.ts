import { createContext } from "react";

interface ContextState {
  coordinates: { lng: number; lat: number };
  setCoordinates: any;
}

export const FormContext = createContext({} as ContextState);
