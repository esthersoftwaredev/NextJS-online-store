import { NextRequest } from "next/server";
import { products } from "@/app/product-data";

type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
	"1": ["123", "345"],
	"2": ["456", "567"],
	"3": ["789"],
};

type Params = {
	id: string;
};

// add if no user not-found

export async function GET(
	request: NextRequest,
	{ params }: { params: Params }
) {
	const userId = params.id;
	const productIds = carts[userId];

	if (productIds === undefined) {
		return new Response(JSON.stringify([]), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	const cartProducts = productIds.map(
		(id) => products.find((product) => product.id === id)!
	);

	return new Response(JSON.stringify(cartProducts), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

type CartBody = {
	productId: string;
};

export async function POST(
	request: NextRequest,
	{ params }: { params: Params }
) {
  const userId = params.id;
  const body: CartBody = await request.json();
	const productId = body.productId;

	carts[userId] = carts[userId] ? carts[userId].concat(productId) : [productId];
	const cartProducts = carts[userId].map((id) => products.find((product) => product.id === id)!);

	return new Response(JSON.stringify(cartProducts), {
		status: 201,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
