import { MainNavbar } from '../../nav/components/MainNavbar';
import { Route, Routes } from 'react-router-dom';
import { DashBoardAdminPage } from '../pages/DashBoardAdminPage';
import { DashBoardUserPage } from '../pages/DashBoardUserPage';
import { TurnsReservationPage } from '../pages/TurnsReservationPage';
import { HomeScreenPage } from '../pages/HomeScreenPage';
import { Flowbite } from 'flowbite-react';
import { MainFooter } from '../../footer/components/MainFooter';

export const MainRoutes = () => {
	return (
		<>
			<div className='lg:container mx-auto px-4'>
				<Flowbite>
					<div>
						<MainNavbar />
					</div>

					<Routes>
						<Route path='/dashadmin' element={<DashBoardAdminPage />} />
						<Route path='/dashuser' element={<DashBoardUserPage />} />
						<Route path='/turns' element={<TurnsReservationPage />} />
						<Route path='/' element={<HomeScreenPage />} />
					</Routes>
					<footer>
						<MainFooter />
					</footer>
				</Flowbite>
			</div>
		</>
	);
};
