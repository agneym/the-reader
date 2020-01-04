import React, { FC } from "react";
import styled from "styled-components";

const Main = styled.main`
  margin-top: ${props => props.theme.nav.height};
`;

const Content: FC = () => {
  return <Main></Main>;
};

export default Content;
