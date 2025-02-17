import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-white dark:bg-slate-900 shadow-md">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <ul className="flex space-x-4">
        <li>
          <Link href="/products" className="text-gray-700 dark:text-slate-500 hover:text-black dark:hover:text-slate-300">Products</Link>
        </li>
        <li>
          <Link href="/cart" className="text-gray-700 dark:text-slate-500 hover:text-black dark:hover:text-slate-300">Cart</Link>
        </li>
        <li>
          <Link href="/checkout" className="text-gray-700 dark:text-slate-500 hover:text-black dark:hover:text-slate-300">Check Out</Link>
        </li>
      </ul>
    </div>
  </nav>
);
}