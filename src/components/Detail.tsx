import React, { FC, ComponentType, ReactNode } from "react";
import styled from "styled-components";

import media from "../utils/media";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1em;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  ${media.phone} {
    margin: 0.5em 0;
  }
`;

const Text = styled.dd`
  margin-left: 0.5em;
`;

interface IProps {
  icon: ComponentType;
  label: string;
  text: ReactNode;
}

const Detail: FC<IProps> = ({ icon: Icon, text, label }) => {
  if (!text) {
    return null;
  }
  return (
    <Container title={label}>
      <dt>{<Icon aria-label={label} />}</dt>
      <Text>{text}</Text>
    </Container>
  );
};

export default Detail;
