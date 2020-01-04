import React, { FC, useState } from "react";
import styled from "styled-components";

import Header from "./Header";
import Spinner from "../Spinner";
import api from "../../api";
import { IParseResult } from "../../api/parse";
import Viewer from "../Viewer";

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
  margin-top: 2em;
  border-top: 0.1em solid ${props => props.theme.colors.gray300};
  padding: 0.5em;
`;

const PositionMessage = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
  margin: 0;
  color: ${props => props.theme.colors.gray700};
`;

const SpinnerContainer = styled(PositionMessage)`
  height: 3em;
  width: 3em;
  color: ${props => props.theme.colors.primary};
`;

const Content: FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<IParseResult | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const handleView = (url: string) => {
    setLoading(true);
    api
      .parse(url)
      .then(response => {
        setResult(response.data);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
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
          {!result && !loading && (
            <PositionMessage as="p">
              Add a URL above to see result here.
            </PositionMessage>
          )}
          {!loading && !error && result && <Viewer data={result} />}
        </ViewArea>
      </Container>
    </Main>
  );
};

export default Content;
