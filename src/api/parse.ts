import { stringify } from "qs";

export interface IData {}

export default async function parse(reqUrl: string): Promise<IData> {
  return fetch(
    `/.netlify/functions/parse?q=${stringify({ q: reqUrl })}`
  ).then(response => response.json());
}
