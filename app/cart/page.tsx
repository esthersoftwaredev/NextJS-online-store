import ShoppingCartList from "./ShoppingCartList";

export default async function CartPage() {
  const localUrl = 'http://localhost:3000';
  const response = await fetch(`${localUrl}/api/users/2/cart`, {
    cache: 'no-cache',
  });
  const cartProducts = await response.json();

  return (
    <ShoppingCartList initialCartProducts={cartProducts} />
  );
}