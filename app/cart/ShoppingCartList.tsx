"use client";

import { useState } from "react";
import { Product } from "@/app/product-data";
import Link from "next/link";

export default function ShoppingCartList({
	initialCartProducts,
}: {
	initialCartProducts: Product[];
}) {
	const [cartProducts, setCartProducts] = useState(initialCartProducts);

  async function removeFromCart(productId: string) {
     const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users/2/cart`, {
      method: "DELETE",
      body: JSON.stringify({ productId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const updatedCartProducts = await response.json();
    setCartProducts(updatedCartProducts);
  }

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
              <div className="flex justify-end">
                <button
                  className="bg-sky-400 hover:bg-sky-600 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromCart(product.id);
                  }}> Remove from Cart
                </button>
              </div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
