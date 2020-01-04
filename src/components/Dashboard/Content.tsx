import React, { FC, useState } from "react";
import styled from "styled-components";

import Header from "./Header";

const Main = styled.main`
  margin: calc(${props => props.theme.nav.height} + 3em) auto 0 auto;
  background-color: #ffffff;
  width: 100%;
  max-width: 800px;
  padding: 2em 1em;
  box-shadow: ${props => props.theme.boxShadows.xl};
`;

const ViewArea = styled.section``;

const Content: FC = () => {
  const [loading, setLoading] = useState(false);
  const handleView = (url: string) => {
    setLoading(true);
    console.log(url);
  };
  return (
    <Main>
      <Header loading={loading} onView={handleView} />
      <ViewArea></ViewArea>
    </Main>
  );
};

export default Content;
