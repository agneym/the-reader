import React, { FC } from "react";
import styled from "styled-components";
import { Twitter } from "react-feather";

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  height: ${props => props.theme.nav.height};
  box-shadow: ${props => props.theme.boxShadows.lg};
  z-index: 50;
  background-color: #ffffff;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  justify-content: space-between;
`;

const Navbar: FC = () => {
  return (
    <Nav>
      <p>The Reader</p>
      <div>
        <a
          href="https://twitter.com/agneymenon"
          title="Follow me on Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter aria-label="Twitter" />
        </a>
      </div>
    </Nav>
  );
};

export default Navbar;
