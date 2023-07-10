import { Link } from 'react-router-dom';
import { RatingCard } from './RatingCard';

export const MainCard = ({ className, card }) => {
	const { id, title, pictures, category, location, reviews_count, rating } =
		card;
	return (
		<div
			className={
				'max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ' +
				className
			}>
			<Link to={`/${id}`}>
				<img
					className='rounded-t-lg h-40 w-full object-cover object-center'
					src={pictures[0]}
					alt=''
				/>

				<div className='px-5 pt-3 pb-2'>
					<h5 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						{title}
					</h5>

					<RatingCard
						className='mb-1'
						rating={rating}
						reviews_count={reviews_count}
					/>
					<p className='mb-4 font-normal text-gray-700 dark:text-gray-400'>
						{location}
					</p>
					<div className='mb-1 font-normal text-gray-700 dark:text-gray-400'>
						<span className='border-slate-700 border px-3 py-1 my-auto'>
							{category}
						</span>
					</div>
				</div>
			</Link>
		</div>
	);
};
