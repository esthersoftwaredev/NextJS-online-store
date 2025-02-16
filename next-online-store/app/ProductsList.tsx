import Image from "next/image";
import Link from "next/link";
import { Product } from "./product-data";

export default function ProductsList({ products }: { products: Product[] }) {
	return (
		<div>
			{products.map((product) => (
				<Link key={product.id} href="/product-details">
          <Image
            src={'/' + product.imageUrl}
            alt={product.name}
            width={150}
            height={150}
          />
					<h2>{product.name}</h2>
					<p>${product.price}</p>
				</Link>
			))}
		</div>
	);
}
