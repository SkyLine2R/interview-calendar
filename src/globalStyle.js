import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0
}
body {
    width: clamp(500px, 100vw, 740px);
    margin: auto;
      @media (max-width: 720px) {
    width: 98%;
  }
}
`;

export default GlobalStyle;
