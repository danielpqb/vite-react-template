import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { Animations } from "./types";

export function useAnimate(
  animations: { [id: string]: Animations },
  changeAnimationState: (id: string, isAnimating: boolean) => void
) {
  // console.log(animations);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const [name, setName] = useState("");
  const [duration, setDuration] = useState(1000);

  function animateElement({ name, duration = 1000 }: { name: string; duration?: number }) {
    // if (!animations[id]?.isAnimating) {
    // changeAnimationState(name, )
    setName(() => name);
    setDuration(() => duration);

    setTimeout(() => {
      setName(() => "");
    }, duration);
    // }
  }

  function AnimateElement({
    onFirstRender,
    children,
  }: {
    onFirstRender?: () => void;
    children: ReactNode;
  }) {
    useEffect(() => {
      if (isFirstRender && onFirstRender) {
        (onFirstRender as () => void)();
        setIsFirstRender(false);
      }
    }, []);

    if (isFirstRender) {
      return <></>;
    }

    return (
      <Container
        animateIn={name}
        duration={(duration / 1000).toFixed(3).toString()}
      >
        {children}
      </Container>
    );
  }

  return {
    animateElement,
    AnimateElement,
  };
}

const Container = styled.div<{ animateIn: string; duration: string }>`
  & {
    display: inherit;
    flex-direction: inherit;
    width: fit-content;
    height: fit-content;

    animation: ${({ animateIn }) => animateIn};
    animation-duration: ${({ duration }) => duration}s;
  }
`;
