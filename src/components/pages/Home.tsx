import { useAnimate, Animation } from "react-animate-with-css";
import styled from "styled-components";

import { useAppContext } from "../../contexts/AppContext";

export default function Home() {
  const { setAlert } = useAppContext();

  const { animate } = useAnimate();

  return (
    <Container>
      <Animation
        id={"icon"}
        animateIn={{ name: "backInLeft" }}
      >
        <img
          src="/logo.svg"
          alt=""
          onClick={() => {
            animate({
              id: "icon",
              name: "backInLeft",
              duration: 1000,
              repeat: 1,
              removeAfter: true,
              direction: "reverse",
              timing: "linear",
            });
          }}
        />
      </Animation>

      <Animation
        id={"icon2"}
        animateIn={{ name: "backInRight" }}
      >
        <img
          src="/logo.svg"
          alt=""
          onClick={() => {
            animate({ id: "icon2", name: "tada", duration: 1000 });
          }}
        />
      </Animation>

      <Animation
        id={"alertButton"}
        animateIn={{ name: "backInUp", duration: 1000 }}
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
