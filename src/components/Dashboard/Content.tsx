import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import { stringify } from "qs";
import { Link } from "react-router-dom";

import Header from "./Header";
import Spinner from "../Spinner";
import api from "../../api";
import { IParseResult } from "../../api/parse";
import Viewer from "../Viewer";
import media from "../../utils/media";

const topSpacing = "3em";

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  padding-top: calc(${props => props.theme.nav.height} + ${topSpacing});

  ${media.phone} {
    padding-top: calc(${props => props.theme.nav.height} + 0.5em);
  }
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
  text-align: center;
  color: ${props => props.theme.colors.gray700};
`;

const SpinnerContainer = styled(PositionMessage)`
  height: 3em;
  width: 3em;
  color: ${props => props.theme.colors.primary};
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.gray700};

  &:visited {
    color: ${props => props.theme.colors.gray700};
  }
`;

const Content: FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<IParseResult | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const location = useLocation();

  useEffect(() => {
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

    const searchParams = new URLSearchParams(location.search);
    const url = searchParams.get("q");
    if (url) {
      handleView(url);
    }
  }, [location.search]);

  return (
    <Main>
      <Container>
        <Header loading={loading} />
        <ViewArea>
          {loading && (
            <SpinnerContainer>
              <Spinner />
            </SpinnerContainer>
          )}
          {!result && !loading && !error && (
            <PositionMessage as="p">
              Add a URL above to see result here. <br />
              For eg.{" "}
              <StyledLink
                to={`/?${stringify({
                  q: "https://en.wikipedia.org/wiki/Special:Random",
                })}`}
              >
                https://en.wikipedia.org/wiki/Special:Random
              </StyledLink>
            </PositionMessage>
          )}
          {!loading && !error && result && <Viewer data={result} />}
          {error && (
            <PositionMessage>
              Unexpected Error. Please check and try again.
            </PositionMessage>
          )}
        </ViewArea>
      </Container>
    </Main>
  );
};

export default Content;
