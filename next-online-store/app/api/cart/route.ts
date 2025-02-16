export async function GET() {
  return new Response( "Cart", {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
