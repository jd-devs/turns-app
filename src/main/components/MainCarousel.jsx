import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MainCard } from './MainCard';
import { useEffect, useState } from 'react';
import { DB_HOST } from '../../../db-config';

export const MainCarousel = () => {
	const [cardList, setCardList] = useState([]);
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};
	useEffect(() => {
		fetch(DB_HOST + '/publications')
			.then((res) => res.json())
			.then((res) => setCardList(res));
	}, []);
	return (
		<div>
			<div>
				<Slider {...settings}>
					{cardList.length > 0 &&
						cardList.map((card) => (
							<MainCard
								key={card.id}
								className={'mx-3 my-3 object-cover'}
								card={card}
							/>
						))}
				</Slider>
			</div>
		</div>
	);
};
