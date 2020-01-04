import React, { FC, useState, FormEvent, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router";
import { stringify } from "qs";

import AddURL from "./AddURL";

const Container = styled.header``;

interface IProps {
  loading: boolean;
}

const Header: FC<IProps> = ({ loading }) => {
  const location = useLocation();
  const history = useHistory();
  const [url, setUrl] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const url = searchParams.get("q");
    setUrl(url ?? "");
  }, [location.search]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    history.push({
      pathname: "/",
      search: stringify({ q: url }),
    });
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <AddURL url={url} setUrl={setUrl} disable={loading} />
      </form>
    </Container>
  );
};

export default Header;
