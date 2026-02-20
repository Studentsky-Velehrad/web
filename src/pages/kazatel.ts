import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL("/kazatel.pdf", request.url);
  const response = await fetch(url);

  return new Response(response.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=kazatel.pdf",
    },
  });
};