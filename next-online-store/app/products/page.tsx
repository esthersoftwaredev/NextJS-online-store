import ProductsList from "../ProductsList";
import { products } from "../product-data";

export default function ProductsPage() {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="w-full h-full p-16 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-8">Products</h1>
        <ProductsList products={products} />
      </div>
    </div>
  );
}

