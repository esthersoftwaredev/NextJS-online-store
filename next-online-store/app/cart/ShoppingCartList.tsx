"use client";

import { useState } from "react";
import { Product } from "@/app/product-data";
import Link from "next/link";

export default function ShoppingCartList({
	initialCartProducts,
}: {
	initialCartProducts: Product[];
}) {
	const [cartProducts] = useState(initialCartProducts);

	return (
		<div className='w-full bg-gray-100 dark:bg-slate-800 min-h-[87vh] mx-auto p-16'>
			<h1 className='text-4xl font-bold mb-6'>Shopping Cart</h1>

			<ul className='space-y-4'>
				{" "}
				{/* List for cart items */}
				{cartProducts.map((product) => (
					<li
						key={product.id}
						className='bg-white dark:bg-slate-900 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300'
					>
						<Link href={`/products/${product.id}`}>
							<h3 className='text-xl font-semibold mb-2'>{product.name}</h3>
							<p className='text-gray-600'>${product.price}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
