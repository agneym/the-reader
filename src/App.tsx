import React, { FC } from "react";
import GlobalStyle from "./utils/Global";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import theme from "./utils/theme";
import Dashboard from "./pages/Dashboard";

const App: FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </Router>
  );
};

export default App;
