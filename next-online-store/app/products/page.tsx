import ProductsList from "../ProductsList";
import { products } from "../product-data";

export default function ProductsPage() {
  return (
    <div className="min-h-[82vh] flex flex-col bg-gray-100 dark:bg-slate-800">
      <div className="w-full h-full p-16 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-8">Products</h1>
        <ProductsList products={products} />
      </div>
    </div>
  );
}

