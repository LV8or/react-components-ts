import React, { useState } from 'react';
import useFetch from '../hooks/useFetch.ts';

interface Image {
	id: string;
	author: string;
	width: number;
	height: number;
	url: string;
	download_url: string;
}

const ImageSliderPage: React.FC = () => {

	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const page: number = 1;
	const limit: number = 10;
	const url: string = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
	const { data: slidesData, loading, error } = useFetch<Image[]>(url);

	const handlePrev = (): void => {
		setCurrentSlide(prevSlide => (prevSlide === 0 ? slidesData!.length - 1 : prevSlide - 1));
	};
	
	const handleNext = (): void => {
		setCurrentSlide(prevSlide => (prevSlide === slidesData!.length - 1 ? 0 : prevSlide + 1));
	};

	return (
		<div className="app-cont">
			<div className="container">
				<header>
					<h1>Image Slider</h1>
				</header>

				{error && <div className="error-msg">{error}</div>}

				{!loading && slidesData &&
					<div className="comp-cont img-container">
						<div className="arrow arrow-left" onClick={handlePrev}></div>

						{slidesData.map((img, i) => (
							<img
								key={i}
								src={img.download_url}
								alt={img.download_url}
								className={`img-slide ${currentSlide === i ? 'current-image' : 'hide-current-image'}`}
							/>
						))}

						<div className="arrow arrow-right" onClick={handleNext}></div>

						<span className="circle-indicators">
							{slidesData.map((_, i) => (
								<button
									key={i}
									className={`current-indicator ${currentSlide === i ? '' : 'inactive-indicator'}`}
									onClick={() => setCurrentSlide(i)}
								></button>
							))}
						</span>
					</div>
				}
			</div>
		</div>
	);
};

export default ImageSliderPage;
