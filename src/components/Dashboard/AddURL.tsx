import React, { FC } from "react";
import styled from "styled-components";

import Input from "../Input";
import Button from "../Button";

const Container = styled.div`
  display: flex;
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
`;

const AddURL: FC = () => {
  return (
    <Container>
      <StyledInput type="url" name="url" id="url" full placeholder="Add URL" />
      <StyledButton styleType="primary" type="submit">
        View
      </StyledButton>
    </Container>
  );
};

export default AddURL;
