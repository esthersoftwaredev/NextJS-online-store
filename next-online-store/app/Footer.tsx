export default function Footer() {
	return (
		<footer className='bg-white dark:bg-slate-900 relative mt-10 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]'>
			<div className='container mx-auto px-4 py-4 flex justify-center items-center'>
				<small className='text-center text-gray-700 dark:text-slate-500'>
					NextJS App v14.2.8 | Developed by{" "}
					<a
						href='https://esthersoftware.dev'
						target='_blank'
						rel='noopener noreferrer'
						className='text-slate-300 dark:text-slate-600 hover:underline'
					>
						Esther White
					</a>
				</small>
			</div>
		</footer>
	);
}
