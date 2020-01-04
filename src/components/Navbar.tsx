import React, { FC } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  height: ${props => props.theme.nav.height};
  box-shadow: ${props => props.theme.boxShadows.lg};
  z-index: 50;
  background-color: #ffffff;
`;

const Navbar: FC = () => {
  return <Nav></Nav>;
};

export default Navbar;
