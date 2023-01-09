import { useState } from "react";
import { Animations } from "./types";

export function useHashMap() {
  const [hashMap, setHashMap] = useState({});

  function addAnimation(params: Animations) {
    setHashMap((old) => {
      return { ...old, [params.id]: { ...params, isAnimating: false } };
    });
  }

  function changeAnimationState(id: string, isAnimating: boolean) {
    setHashMap((old: { [id: string]: Animations }) => {
      return { ...old, [id]: { ...old[id], isAnimating: isAnimating } };
    });
  }

  return { addAnimation, changeAnimationState, hashMap };
}
