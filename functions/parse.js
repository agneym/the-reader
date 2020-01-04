import Mercury from "@postlight/mercury-parser";

export async function handler(event) {
  const parameters = event.queryStringParameters;
  const url = parameters.q;
  console.log(url);
  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid/No URL provided" }),
    };
  }
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ data: "Hello" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err }),
    };
  }
}
