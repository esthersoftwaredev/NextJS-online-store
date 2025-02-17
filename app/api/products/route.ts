import { connectToDB } from "../db";

export const dynamic = 'force-dynamic';

export async function GET() {
	const { db } = await connectToDB();
	const products = await db.collection("products").find({}).toArray();
	
	return new Response(JSON.stringify(products), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
