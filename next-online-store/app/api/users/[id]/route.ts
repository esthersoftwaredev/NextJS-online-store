import { NextRequest } from "next/server";
import { products } from "@/app/product-data";

type Params = {
	productId: string;
};

type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
  '1': ['123', '345'],
  '2': ['456', '567'],
  '3': ['789'],
}

// add if no user not-found

export async function GET(
	request: NextRequest,
	{ params }: { params: Params }
) {
  const userId = params.productId;
  const productIds = carts[userId];
  const cartProducts = productIds.map((id) => products.find((product) => product.id === id)!);

  return new Response( JSON.stringify(cartProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
