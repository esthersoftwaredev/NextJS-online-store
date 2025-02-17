import ProductsList from "../ProductsList";

export default async function ProductsPage() {
  const localUrl = 'http://localhost:3000';
  const response = await fetch(`${localUrl}/api/products`);
  const products = await response.json();

  const secondRes = await fetch(`${localUrl}/api/users/2/cart`, {
    cache: 'no-cache',
  });
  const cartProducts = await secondRes.json();

  return (
    <div className="min-h-[82vh] flex flex-col bg-gray-100 dark:bg-slate-800">
      <div className="w-full h-full p-16 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-8">Products</h1>
        <ProductsList products={products} initialCartProducts={cartProducts}/>
      </div>
    </div>
  );
}

