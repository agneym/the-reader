import React, { FC } from "react";
import styled from "styled-components";
import { Twitter } from "react-feather";
import { Link } from "react-router-dom";

import namePath from "../images/name-with-logo.png";

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

const Image = styled.img`
  height: 2em;
`;

const Navbar: FC = () => {
  return (
    <Nav>
      <Link to="/">
        <Image src={namePath} alt="The Reader - Link to homepage" />
      </Link>
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
