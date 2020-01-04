import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${props => props.theme.colors.gray300};
    font-family: ${props => props.theme.fonts.main};
    line-height: 1.5;
    font-size: 100%;
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
  }
`;

export default GlobalStyle;
