import { createContext, Dispatch, SetStateAction } from "react";

export interface AppContextState {
  showDate: string;
  setShowDate: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextState>({
  setShowDate: () => {},
  showDate: ""
});
