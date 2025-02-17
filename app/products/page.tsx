import ProductsList from "../ProductsList";

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products`);
  const products = await response.json();

  const secondRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users/2/cart`, {
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

