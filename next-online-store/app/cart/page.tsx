'use client';

import { useState } from 'react';
import { products } from '../product-data';
import Link from 'next/link';

export default function CartPage() {
  const [cartIds] = useState<string[]>(['123', '345']);

  const cartProducts = cartIds.map((id) => products.find((product) => product.id === id)!);

  return (
    <div className="container min-h-[81vh] mx-auto p-16">
    <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

    <ul className="space-y-4"> {/* List for cart items */}
      {cartProducts.map(product => (
        <li key={product.id} className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
          <Link href={`/products/${product.id}`}>
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
	);
}