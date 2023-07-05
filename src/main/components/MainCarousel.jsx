import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MainCard } from './MainCard';

export const MainCarousel = () => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};
	return (
		<div>
			<h2>Carousel</h2>
			<div>
				<Slider {...settings}>
					<MainCard className={'mx-3 my-3 object-cover'} />
					<MainCard className={'mx-3 my-3 object-cover'} />
					<MainCard className={'mx-3 my-3 object-cover'} />
					<MainCard className={'mx-3 my-3 object-cover'} />
					<MainCard className={'mx-3 my-3 object-cover'} />
				</Slider>
			</div>
		</div>
	);
};
