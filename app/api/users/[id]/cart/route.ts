import { NextRequest } from "next/server";
import { connectToDB } from "@/app/api/db";

type Params = {
	id: string;
};

// add if no user not-found

export async function GET(
	request: NextRequest,
	{ params }: { params: Params }
) {
	const { db } = await connectToDB();

	const userId = params.id;
	const userCart = await db.collection("carts").findOne({ userId });

	if (!userCart) {
		return new Response(JSON.stringify([]), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	const cartItemsIds = userCart.cartIds;
	const cartProducts = await db.collection("products").find({ id: { $in: cartItemsIds } }).toArray();

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
	const { db } = await connectToDB();

  const userId = params.id;
  const body: CartBody = await request.json();
	const productId = body.productId;

	const updatedCart = await db.collection("carts").findOneAndUpdate(
		{ userId },
		{ $push: { cartIds: productId } },
		{ upsert: true, returnDocument: "after" }
	);

	const cartProducts = await db.collection("products").find({ id: { $in: updatedCart.cartIds } }).toArray();

	return new Response(JSON.stringify(cartProducts), {
		status: 201,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export async function DELETE(	
	request: NextRequest,
	{ params }: { params: Params }
) {
	const { db } = await connectToDB();

	const userId = params.id;
	const body: CartBody = await request.json();
	const productId = body.productId;

	const updatedCart = await db.collection("carts").findOneAndUpdate(
		{ userId },
		{ $pull: { cartIds: productId } },
		{ returnDocument: "after" }
	);

	if (!updatedCart) {
		return new Response(JSON.stringify([]), {
			status: 202,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	const cartProducts = await db.collection("products").find({ id: { $in: updatedCart.cartIds } }).toArray();

	return new Response(JSON.stringify(cartProducts), {
		status: 202,
		headers: {
			"Content-Type": "application/json",
		},
	});
}