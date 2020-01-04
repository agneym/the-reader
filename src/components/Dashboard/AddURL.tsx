import React, { FC, ChangeEvent } from "react";
import styled from "styled-components";

import Input from "../Input";
import Button from "../Button";

const Container = styled.div`
  display: flex;
  font-size: 1.2em;
`;

const StyledInput = styled(Input)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  flex: 1;
  border-right-color: transparent;
`;

const StyledButton = styled(Button)`
  border-radius: 0.2em;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
  transition: box-shadow 300ms ease-in-out;

  &:hover {
    box-shadow: ${props => props.theme.boxShadows.lg};
  }
`;

interface IProps {
  url: string;
  setUrl: (url: string) => void;
}

const AddURL: FC<IProps> = ({ url, setUrl }) => {
  return (
    <Container>
      <StyledInput
        type="url"
        name="url"
        id="url"
        full
        placeholder="Add URL"
        value={url}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setUrl(event.target.value)
        }
      />
      <StyledButton styleType="primary" type="submit">
        View
      </StyledButton>
    </Container>
  );
};

export default AddURL;
