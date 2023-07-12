import { Rating } from 'flowbite-react';

export const RatingWithText = ({ className }) => {
	return (
		<Rating className={className} size={'md'}>
			<p className='mr-2 font-medium text-gray-500 dark:text-gray-400'>
				4.95 out of 5
			</p>
			<Rating.Star />
			<Rating.Star />
			<Rating.Star />
			<Rating.Star />
			<Rating.Star />
		</Rating>
	);
};
