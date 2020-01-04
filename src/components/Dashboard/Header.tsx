import React, { FC, useState, FormEvent } from "react";
import styled from "styled-components";

import AddURL from "./AddURL";

const Container = styled.header``;

interface IProps {
  loading: boolean;
  onView: (url: string) => void;
}

const Header: FC<IProps> = ({ loading, onView }) => {
  const [url, setUrl] = useState("");

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
