import { createContext, Dispatch, SetStateAction } from "react";

export interface AppContextState {
  showDate: Date;
  setShowDate: Dispatch<SetStateAction<Date>>;
}

export const AppContext = createContext<AppContextState>({
  setShowDate: () => {},
  showDate: new Date()
});
