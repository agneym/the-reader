import React, { FC, useState, FormEvent, useEffect } from "react";
import styled from "styled-components";

import AddURL from "./AddURL";
import { useLocation } from "react-router";

const Container = styled.header``;

interface IProps {
  loading: boolean;
  onView: (url: string) => void;
}

const Header: FC<IProps> = ({ loading, onView }) => {
  const location = useLocation();
  const [url, setUrl] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const url = searchParams.get("q");
    setUrl(url ?? "");
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onView(url);
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
