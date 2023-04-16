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
    width: 640px;
    margin: auto;
}
`;

export default GlobalStyle;
