import NotFoundPage from "@/app/not-found";

export default async function ProductDetailsPage({params} : {params: {id: string}}) {
	const localUrl = 'http://localhost:3000';

  const response = await fetch(`${localUrl}/api/products/${params.id}`);
	const product = await response.json();

  if (!product) {
    return <NotFoundPage />;
  }

  return (
		<div className="w-full bg-gray-100 dark:bg-slate-800 min-h-[87vh] mx=auto p-16 flex flex-col md:flex-row">
			<div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
				<img 
          className="w-full h-auto rounded-lg shadow-md"
          src={product.imageUrl} 
          alt={product.name} 
        />
			</div>
			<div className="md:w-1/2">
				<h1 className='text-4xl font-bold mb-4'>{product.name}</h1>
				<p className='text-2xl text-gray-600 mb-6'>${product.price}</p>
				<h3 className='text-2xl font-semibold mb-2'>Description</h3>
				<p className='text-gray-700'>{product.description}</p>
			</div>
		</div>
	);
}