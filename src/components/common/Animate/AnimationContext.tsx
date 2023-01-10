import { createContext, ReactNode, useContext, useState } from "react";
import { Animations, AnimationStates } from "./types";
import "animate.css";
import { Animation } from "./Animation";

const AnimationContext = createContext({} as AnimationStates);

export const useAnimation = () => {
  const { animate } = useContext(AnimationContext);
  return { animate, Animation };
};

export const useAnimationContext = () => {
  return { ...useContext(AnimationContext), Animation };
};

export default function AnimationContextProvider({ children }: { children: ReactNode }) {
  const [animations, setAnimations] = useState({});

  function putAnimation(id: string, params: Partial<Omit<Animations, "id">>) {
    setAnimations((old: { [id: string]: Animations }) => {
      return { ...old, [id]: { ...old[id], ...params } };
    });
  }

  function animate({ id, name, duration = 1000 }: { id: string; name: string; duration?: number }) {
    const animation: Animations = animations[id as keyof object];
    const element = animation?.element;
    const _duration = (duration / 1000).toFixed(3).toString() + "s";
    if (!element) return;

    if (!animation.isAnimating) {
      putAnimation(id, { isAnimating: true });
      element.style.animationName = name;
      element.style.animationDuration = _duration;

      setTimeout(() => {
        element.style.animationName = "";
        putAnimation(id, { isAnimating: false });
      }, duration);
    }
  }

  const states = { animations, putAnimation, animate };

  return <AnimationContext.Provider value={states}>{children}</AnimationContext.Provider>;
}
