import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DB_HOST } from '../../../db-config';
import { RatingCard } from '../components/RatingCard';

export const DetailPage = () => {
	const { id } = useParams();
	const [card, setCard] = useState({});

	useEffect(() => {
		fetch(DB_HOST + '/publications/' + id)
			.then((res) => res.json())
			.then((res) => setCard(res));
	}, [id]);

	const checkOpeningStatusAndTimeToClose = (atention_shedule) => {
		const options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
		const [day, _, month, _a, numberDay, _b, year] = new Intl.DateTimeFormat(
			'en-US',
			options
		).formatToParts();
	};

	checkOpeningStatusAndTimeToClose(card.atention_shedule);

	const renderContent = card.pictures ? (
		<main>
			<figure>
				Gallery Img
				<img src={card.pictures[0]} alt='' />
			</figure>
			<section>
				<h1>{card.title}</h1>
				<RatingCard
					className='mb-1'
					rating={card.rating}
					reviews_count={card.reviews_count}
				/>
				<h3>{card.location}</h3>
				<h3>{card.location}</h3>
				Abre pronto Cierra a las ... Tags
			</section>
			<section>Services</section>
			<section>Team members</section>
			<section>Ratings</section>
			<section>Detailed info and description, schedules</section>
			<section>Ubication</section>
			<aside>Near business, similar</aside>
		</main>
	) : (
		'Cargando'
	);
	return <>{renderContent}</>;
};
