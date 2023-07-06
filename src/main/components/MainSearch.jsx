import {
	faMapLocation,
	faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MainSearch = ({ className }) => {
	return (
		<div className={className}>
			<form>
				<label
					htmlFor='default-search'
					className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
					Search
				</label>
				<div className='relative'>
					<div className='grid lg:grid-cols-2 gap-4 lg:gap-0'>
						<div className='relative'>
							<div className='absolute top-5 left-0 flex items-center pl-3 pointer-events-none'>
								<FontAwesomeIcon icon={faSearch} />
							</div>
							<input
								type='search'
								id='default-search'
								className='block w-full p-4 lg:rounded-r-none pl-10 text-sm text-gray-900 border  border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='Search Mockups, Logos...'
								required
							/>
						</div>

						<div className='relative'>
							<div className='absolute top-5 left-0 flex items-center pl-3 pointer-events-none'>
								<FontAwesomeIcon icon={faMapLocation} />
							</div>
							<input
								type='search'
								id='default-search'
								className='block w-full p-4 pl-10 lg:rounded-s-none text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='Location'
								required
							/>
						</div>
					</div>
					<button
						type='submit'
						className='text-white absolute hidden lg:block right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
						Search
					</button>
					<button
						type='submit'
						className='text-white block lg:hidden mt-4 mx-auto px-10 py-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold text-md rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
						Search
					</button>
				</div>
			</form>
		</div>
	);
};
