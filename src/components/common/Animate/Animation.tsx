import { ReactNode, useEffect } from "react";
import { useAnimation } from "./AnimationContext";
import { useAnimate } from "./useAnimate";

export function Animation({
  id,
  animateIn,
  duration,
  children,
}: {
  id?: string;
  animateIn?: string;
  duration?: number;
  children: ReactNode;
}) {
  animateIn = animateIn ? animateIn.replace("animate__", "") : animateIn;
  const { addAnimation, changeAnimationState, animations } = useAnimation();
  const { animateElement, AnimateElement } = useAnimate(animations, changeAnimationState);

  useEffect(() => {
    if (id) {
      addAnimation({ id, animate: animateElement });
    }
  }, []);

  return (
    <AnimateElement
      onFirstRender={() => {
        animateElement({ name: animateIn || "", duration });
      }}
    >
      {children}
    </AnimateElement>
  );
}
