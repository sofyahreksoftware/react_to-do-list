import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    background-color: #ddd;
    max-width: 900px;
    font-family: "Lato", sans-serif;
    margin: 0 auto;
  }

  button:hover {
    cursor: pointer
  }

  button:active {
    border: 1.9px solid black
  }
  `;
