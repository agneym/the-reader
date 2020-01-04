import Mercury from "@postlight/mercury-parser";

export async function handler(event) {
  const parameters = event.queryStringParameters;
  const url = parameters.q;

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid/No URL provided" }),
    };
  }
  try {
    const response = await Mercury.parse(url);
    return {
      statusCode: 200,
      body: JSON.stringify({ data: response }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err }),
    };
  }
}
