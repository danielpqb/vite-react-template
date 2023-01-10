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

  function animate({
    id,
    name,
    duration = 1000,
    repeat = 1,
    direction = "normal",
    timing = "linear",
    removeAfter = false,
  }: {
    id: string;
    name: string;
    duration?: number;
    repeat?: number;
    direction?: string;
    timing?: string;
    removeAfter?: boolean;
  }) {
    const animation: Animations = animations[id as keyof object];
    const element = animation?.element;
    if (!element) return;
    if (direction.includes("alternate")) {
      repeat *= 2;
      duration /= 2;
    }
    const _duration = (duration / 1000).toFixed(3).toString() + "s";

    if (!animation.isAnimating) {
      putAnimation(id, { isAnimating: true, isRemoved: false });
      element.style.animationName = name;
      element.style.animationDuration = _duration;
      element.style.animationIterationCount = repeat.toString();
      element.style.animationDirection = direction;
      element.style.animationTimingFunction = timing;

      setTimeout(() => {
        element.style.animationName = "";
        if (removeAfter) {
          putAnimation(id, { isRemoved: true });
          element.classList.add("removed");
        }
        putAnimation(id, { isAnimating: false });
      }, duration * repeat);
    }
  }

  const states = { animations, putAnimation, animate };

  return <AnimationContext.Provider value={states}>{children}</AnimationContext.Provider>;
}
