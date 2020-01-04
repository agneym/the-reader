import React, { FC } from "react";
import GlobalStyle from "./utils/Global";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
