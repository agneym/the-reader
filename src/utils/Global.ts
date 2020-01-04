import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background-color: ${props => props.theme.colors.gray300};
    font-family: ${props => props.theme.fonts.main};
    line-height: 1.5;
    font-size: 100%;
    min-height: 100vh;
    overscroll-behavior: none;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
  }
  pre {
    white-space: normal;
  }
`;

export default GlobalStyle;
