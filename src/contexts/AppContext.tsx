import { createContext, useContext, ReactNode, useState } from "react";
import { AppStates } from "../global-types";

const AppContext = createContext({} as AppStates);

export const useAppContext = () => {
	return useContext(AppContext);
};

export function AppContextProvider({ children }: { children: ReactNode }) {
	const [userData, setUserData] = useState({});
	const [alert, setAlert] = useState({});
	const [counter, setCounter] = useState({});
	const [reloadApp, setReloadApp] = useState(0);

	const states = { userData, setUserData, alert, setAlert, counter, setCounter, reloadApp, setReloadApp };

	return <AppContext.Provider value={states as AppStates}>{children}</AppContext.Provider>;
}
