import React, { FC } from "react";
import { IParseResult } from "../api/parse";

interface IProps {
  data: IParseResult;
}

const Viewer: FC<IProps> = ({ data }) => {
  return (
    <article>
      <h1>{data.title}</h1>
      {data.content ? (
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      ) : (
        <p>We failed to parse this URL. The Sadness :(</p>
      )}
    </article>
  );
};

export default Viewer;
