import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for styling
import { getHotNovel } from "../../utils/API";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css";
const settings = {
	className: "center",
	centerMode: true,
	infinite: true,
	slidesToShow: 4,
	autoplay: true,
	speed: 500,
	dots: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 960,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};
const NewNovelsCarousel = () => {
	const [mangas, setNovels] = useState([]);

	useEffect(() => {
		getHotNovel(setNovels);
	}, []);

	return (
		<>
			<Slider {...settings}>
				{mangas.map((manga) => (
					<div className="book-card" key={mangas.id}>
						<div className="book-card__cover">
							<div className="book-card__book">
								<a href={`novel/${manga.id}`} className="book-card__book-front">
									<img className="book-card__img" src={manga.image} alt="" />
								</a>
								<div className="book-card__book-back" />
								<div className="book-card__book-side" />
							</div>
						</div>
						<div>
							<div className="book-card__title">
								<a href={`novel/${manga.id}`}>
									<h3 className="text-center text-one-row story-name">
										{manga.name}
									</h3>
								</a>
							</div>
							<div className="book-card__author">
								<p value={manga.rating} />
							</div>
						</div>
					</div>
				))}
			</Slider>
		</>
	);
};

export default NewNovelsCarousel;
