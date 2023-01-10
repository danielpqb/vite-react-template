import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAnimationContext } from "./AnimationContext";
import { AnimationNames } from "./types";

export function Animation({
  id,
  animateIn,
  children,
}: {
  id?: string;
  animateIn?: { name: AnimationNames; duration?: number };
  children: ReactNode;
}) {
  if (animateIn === undefined) {
    animateIn = { name: "fadeIn", duration: 1000 };
  }
  if (animateIn.duration === undefined) {
    animateIn.duration = 1000;
  }
  animateIn.name = animateIn.name.replace("animate__", "") as AnimationNames;

  const element = useRef(null);

  const { animations, putAnimation, animate } = useAnimationContext();

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    return () => {
      if (id && !animations[id]) {
        putAnimation(id, { isAnimating: false, element: element.current || undefined });
      }
    };
  }, []);

  if (isFirstRender) {
    animate({ id: id || "", name: animateIn.name, duration: animateIn.duration });
    setIsFirstRender(false);
    return <></>;
  }

  return (
    <Container
      ref={element}
      style={{
        animationName: animateIn.name,
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
