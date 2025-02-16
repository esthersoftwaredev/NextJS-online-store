import ProductsList from "../ProductsList";
import { products } from "../product-data";

export default function ProductsPage() {
	return (
		<>
			<h1>Products</h1>
			<ProductsList products={products} />
		</>
	);
}
