import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAnimationContext } from "./AnimationContext";
import { AnimateProps, AnimationNames } from "./types";

export function Animation({
  id,
  animateIn,
  children,
}: {
  id?: string;
  animateIn?: Omit<AnimateProps, "id">;
  children: ReactNode;
}) {
  if (animateIn === undefined) {
    animateIn = { name: "fadeIn", duration: 1000 };
  }
  if (animateIn.duration === undefined) {
    animateIn.duration = 1000;
  }
  animateIn.name = (animateIn.name as string).replace("animate__", "") as AnimationNames;

  const element = useRef(null);

  const { animations, putAnimation } = useAnimationContext();

  useEffect(() => {
    return () => {
      if (id && !animations[id]) {
        putAnimation(id, {
          isAnimating: true,
          element: element.current || undefined,
        });

        setTimeout(() => {
          putAnimation(id, {
            isAnimating: false,
          });
          (element as any).current.style.animationName = "";
        }, animateIn?.duration);
      }
    };
  }, []);

  return (
    <Container
      ref={element}
      style={{
        animationName: animateIn.name as string,
        animationDuration: (animateIn.duration / 1000).toFixed(3).toString() + "s",
        display: animations[id as keyof object]?.isRemoved === true ? "none" : undefined,
      }}
    >
      {children}
    </Container>
  );
}

const Container = styled.div`
  & {
    display: inherit;
    flex-direction: inherit;
    width: fit-content;
    height: fit-content;
  }
`;
