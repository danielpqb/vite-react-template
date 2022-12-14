import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --fontsize: 26px;

    --background-color: #252525;
    --background-border-color: #afafaf;

    --doc-heigth: 100%;
  }

  /* Hide scrollbar */
  *::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
  * {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  html,
  body {
    height: var(--doc-heigth);
  }

  * {
    background: none;
    border: none;
    margin: 0px;
    padding: 0px;
    vertical-align: middle;
    box-sizing: border-box;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: var(--fontsize);
    line-height: 100%;
    color: white;
  }

  *:focus {
    outline: none;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  input {
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;
    color: #FFFFFF;
  }

  a:hover {
    opacity: 0.6;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
