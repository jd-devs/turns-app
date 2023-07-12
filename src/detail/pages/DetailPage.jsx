import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DB_HOST } from '../../../db-config';
import { RatingWithText } from '../components/RatingWithText';

export const DetailPage = () => {
	const { id } = useParams();
	const [card, setCard] = useState({});
	const [sheduleHours, setSheduleHours] = useState('');

	useEffect(() => {
		fetch(DB_HOST + '/publications/' + id)
			.then((res) => res.json())
			.then((res) => {
				setCard(res);
				checkOpeningStatusAndTimeToClose(res.attention_schedule);
			});
	}, [id]);

	const checkOpeningStatusAndTimeToClose = (attention_schedule) => {
		const options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hourCycle: 'h23',
			hour: '2-digit',
			minute: '2-digit',
		};
		let nowDate = new Intl.DateTimeFormat('en-US', options).formatToParts();
		nowDate = nowDate.filter((el) => el.type !== 'literal');
		const [weekday, month, day, year, hour, minute] = nowDate;
		console.log(hour);
		const sheduleHours = attention_schedule.find(
			(schedule) => schedule.day === weekday.value.toLowerCase()
		).hours;
		console.log(sheduleHours);
		if (sheduleHours === 'Closed') {
			return setSheduleHours({ state: 'Cerrado', msg: 'Abre mañana' });
		}
		const [openHour, openMinutes] = sheduleHours
			.split('-')[0]
			.trim()
			.split(':');
		const [closeHour, closeMinutes] = sheduleHours
			.split('-')[1]
			.trim()
			.split(':');

		if (hour.value < openHour || hour.value > closeHour) {
			const timeToOpen = openHour - hour.value;
			return setSheduleHours({
				state: 'Cerrado',
				msg: `Abre en ${timeToOpen} horas`,
			});
		}
		if (
			(hour.value === openHour && minute.value < openMinutes) ||
			minute.value > closeMinutes
		) {
			const timeToOpen = openMinutes - minute.value;
			return setSheduleHours({
				state: 'Cerrado',
				msg: `Abre en ${timeToOpen} minutos`,
			});
		}
		return setSheduleHours({
			state: 'Abierto',
			msg: `Abre en  minutos`,
		});
	};

	const renderContent = card.pictures ? (
		<main>
			<h1 className='text-5xl font-bold my-4'>{card.title}</h1>
			<div className='flex gap-4 items-center text-md mb-3'>
				<RatingWithText className='text-md' />
				<span className='font-bold text-xl'>•</span>
				<span>{sheduleHours.state}</span>
				<span className='font-bold text-xl'>•</span>
				<span>{sheduleHours.msg}</span>
				<span className='font-bold text-xl'>•</span>
				<span className=''>{card.location}</span>
			</div>
			<figure>
				<img src={card.pictures[0]} alt='' />
			</figure>
			<section>Abre pronto Cierra a las ... Tags</section>
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
