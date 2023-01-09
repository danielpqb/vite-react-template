import { Animation } from "components/common/Animate/Animation";
import { useAnimation } from "components/common/Animate/AnimationContext";
import styled from "styled-components";

import { useAppContext } from "../../contexts/AppContext";

export default function Home() {
  const { setAlert } = useAppContext();

  const { animations } = useAnimation();

  return (
    <Container>
      <Animation
        id={"icon"}
        animateIn="backInDown"
      >
        <img
          src="/logo.svg"
          alt=""
          onClick={() => {
            animations.icon.animate({ name: "tada" });
          }}
        />
      </Animation>

      <Animation
        id={"alertButton"}
        animateIn="backInUp"
        duration={1000}
      >
        <ShowAlert
          onClick={() => {
            setAlert({
              show: true,
              type: "ok-cancel",
            });
          }}
        >
          Show Alert
        </ShowAlert>
      </Animation>
    </Container>
  );
}

const Container = styled.div`
  & {
    border: 5px solid var(--background-border-color);
    border-radius: 5px;

    background-color: black;

    flex-direction: column;

    gap: 20px;
  }

  img {
    width: 100px;
  }
  img:hover {
    cursor: pointer;
  }
`;

const ShowAlert = styled.div`
  & {
    border: 5px solid white;
    border-radius: 5px;

    width: fit-content;
    height: fit-content;

    padding: 10px;

    font-size: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;
