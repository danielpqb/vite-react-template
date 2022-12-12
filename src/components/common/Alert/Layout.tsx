import styled from "styled-components";
import { AlertStyleType } from "./types";

export default function Layout({ alertStyle }: { alertStyle: AlertStyleType }) {
  return (
    <>
      <Background alertStyle={alertStyle} />

      <IconBackground alertStyle={alertStyle}>
        <HideBorder alertStyle={alertStyle} />
      </IconBackground>
    </>
  );
}

const Background = styled.div<{ alertStyle: AlertStyleType }>`
  && {
    border: ${({ alertStyle }) => alertStyle.border};
    border-radius: 10px;

    position: absolute;
    background: ${({ alertStyle }) => alertStyle.backgroundColor};

    z-index: -3;
  }
`;

const IconBackground = styled.div<{ alertStyle: AlertStyleType }>`
  && {
    position: absolute;
    top: -${({ alertStyle }) => alertStyle.iconSize / 2 - 5}px;

    border-radius: 50%;
    width: ${({ alertStyle }) => alertStyle.iconSize}px;
    height: ${({ alertStyle }) => alertStyle.iconSize}px;
    background: ${({ alertStyle }) => alertStyle.backgroundColor};

    z-index: -2;

    border: ${({ alertStyle }) => alertStyle.border};
  }
`;

const HideBorder = styled.div<{ alertStyle: AlertStyleType }>`
  && {
    position: absolute;
    top: 50%;

    width: calc(100% + 30px);
    height: calc(50% + 30px);

    background: ${({ alertStyle }) => alertStyle.backgroundColor};

    z-index: -1;

    box-sizing: content-box;
  }
`;
