import React, { FC } from "react";
import styled from "styled-components";

import AddURL from "./AddURL";

const Container = styled.header``;

const Header: FC = () => {
  return (
    <Container>
      <form>
        <AddURL />
      </form>
    </Container>
  );
};

export default Header;
