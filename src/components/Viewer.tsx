import React, { FC } from "react";
import styled from "styled-components";
import { Calendar, Feather, Sliders, Link } from "react-feather";

import { IParseResult } from "../api/parse";
import Detail from "./Detail";
import media from "../utils/media";

interface IProps {
  data: IParseResult;
}

const Heading = styled.h1`
  font-size: 3em;
  line-height: 1.5;
  margin: 0;
`;

const Header = styled.header`
  margin-bottom: 3em;
`;

const DescriptionList = styled.dl`
  display: flex;

  ${media.phone} {
    flex-direction: column;
  }
`;

const Viewer: FC<IProps> = ({ data }) => {
  return (
    <article>
      <Header>
        <Heading>{data.title}</Heading>
        <DescriptionList>
          {data.date_published && (
            <Detail
              icon={Calendar}
              label="Date Published"
              text={new Date(data.date_published).toLocaleString()}
            />
          )}
          <Detail icon={Feather} label="Author" text={data.author} />
          <Detail
            icon={Sliders}
            label="Word Count"
            text={data.word_count.toString()}
          />
          <Detail
            icon={Link}
            label="Domain"
            text={
              <a href={data.domain} target="_blank" rel="noopener noreferrer">
                {data.domain}
              </a>
            }
          />
        </DescriptionList>
      </Header>
      {data.content ? (
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      ) : (
        <p>We failed to parse this URL. The Sadness :(</p>
      )}
    </article>
  );
};

export default Viewer;
