import { stringify } from "qs";

export interface IParseResult {
  title: string | null;
  content: string | null;
  author: string | null;
  date_published: string | null;
  lead_image_url: string | null;
  dek: string | null;
  next_page_url: string | null;
  url: string;
  domain: string;
  excerpt: string | null;
  word_count: number;
  direction: "ltr" | "rtl";
  total_pages: number;
  rendered_pages: number;
}

export interface IData {
  data: IParseResult;
}

export default async function parse(reqUrl: string): Promise<IData> {
  return fetch(
    `/.netlify/functions/parse?${stringify({ q: reqUrl })}`
  ).then(response => response.json());
}
