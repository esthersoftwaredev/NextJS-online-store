'use client';

import { useState } from 'react';
import { products } from '../product-data';

export default function CartPage() {
  const [cartIds] = useState<string[]>(['123', '345']);

  const cartProducts = cartIds.map((id) => products.find((product) => product.id === id)!);

  return (
		<>
			<h1>Shopping Cart</h1>
      {cartProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
		</>
	);
}