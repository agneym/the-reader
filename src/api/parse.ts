import { stringify } from "qs";

export interface IData {
  data: {};
}

export default async function parse(reqUrl: string): Promise<IData> {
  return fetch(
    `/.netlify/functions/parse?${stringify({ q: reqUrl })}`
  ).then(response => response.json());
}
