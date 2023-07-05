import { RatingCard } from './RatingCard';

export const MainCard = ({ className }) => {
	return (
		<div
			className={
				'max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ' +
				className
			}>
			<a href='#'>
				<img
					className='rounded-t-lg h-40 w-full object-cover object-center'
					src='https://source.unsplash.com/random/?city,night'
					alt=''
				/>
			</a>
			<div className='px-5 pt-3 pb-2'>
				<a href='#'>
					<h5 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						Barberia London
					</h5>
				</a>
				<RatingCard className='mb-1' />
				<p className='mb-4 font-normal text-gray-700 dark:text-gray-400'>
					Tucumán, Capital
				</p>
				<div className='mb-1 font-normal text-gray-700 dark:text-gray-400'>
					<span className='border-slate-700 border px-3 py-1 my-auto'>
						Barberias
					</span>
				</div>
			</div>
		</div>
	);
};
