import { createContext, Dispatch, SetStateAction } from "react";

export interface AppContextState {
  sidebarShowDate: Date;
  setSidebarShowDate: Dispatch<SetStateAction<Date>>;
}

export const AppContext = createContext<AppContextState>({
  setSidebarShowDate: () => {},
  sidebarShowDate: new Date()
});
