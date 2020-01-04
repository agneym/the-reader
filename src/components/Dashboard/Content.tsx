import React, { FC, useState } from "react";
import styled from "styled-components";

import Header from "./Header";
import Spinner from "../Spinner";

const topSpacing = "3em";

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  padding-top: calc(${props => props.theme.nav.height} + ${topSpacing});
`;

const Container = styled.div`
  box-shadow: ${props => props.theme.boxShadows.xl};
  background-color: #ffffff;
  padding: 2em 1em;
  min-height: calc(
    100vh - ${props => props.theme.nav.height} - ${topSpacing} - 3em
  );
  display: flex;
  flex-direction: column;
`;

const ViewArea = styled.section`
  position: relative;
  height: 100%;
  flex: 1;
`;

const SpinnerContainer = styled.div`
  height: 3em;
  width: 3em;
  color: ${props => props.theme.colors.primary};
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
`;

const Content: FC = () => {
  const [loading, setLoading] = useState(false);
  const handleView = (url: string) => {
    setLoading(true);
  };
  return (
    <Main>
      <Container>
        <Header loading={loading} onView={handleView} />
        <ViewArea>
          {loading && (
            <SpinnerContainer>
              <Spinner />
            </SpinnerContainer>
          )}
        </ViewArea>
      </Container>
    </Main>
  );
};

export default Content;
