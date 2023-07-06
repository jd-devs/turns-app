import { Flowbite } from 'flowbite-react';
import { MainCarousel } from '../components/MainCarousel';
import { MainSearch } from '../components/MainSearch';
import { MainNavbar } from '../../nav/components/MainNavbar';
import { FeatureSection } from '../components/FeatureSection';

export const HomeScreenPage = () => {
	return (
		<Flowbite>
			<header>
				<MainNavbar />
			</header>
			<div className='lg:container mx-auto px-4'>
				<main>
					<section className='h-96 grid place-content-center '>
						<h1 className='text-5xl text-center tracking-tight font-extrabold'>
							Busca tus locales favoritos y reserva un turno fácilmente!
						</h1>
						<MainSearch className='my-10 flex flex-col gap-4' />
					</section>
					<section>
						<h2 className='text-3xl font-bold tracking-tighter'>Recomendado</h2>
						<MainCarousel />
					</section>
					<FeatureSection />
				</main>
			</div>
		</Flowbite>
	);
};
