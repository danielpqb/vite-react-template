import { createContext, ReactNode, useContext } from "react";
import { AnimationStates } from "./types";
import { useHashMap } from "./useHashMap";
import "animate.css";
import { Animation } from "./Animation";

const AnimationContext = createContext({} as AnimationStates);

export const useAnimation = () => {
  return { ...useContext(AnimationContext), Animation };
};

export default function AnimationContextProvider({ children }: { children: ReactNode }) {
  const hashMapStates = useHashMap();
  const states = { ...hashMapStates, animations: hashMapStates.hashMap };

  return <AnimationContext.Provider value={states}>{children}</AnimationContext.Provider>;
}
