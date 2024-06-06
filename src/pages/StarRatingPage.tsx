import React, { useState } from 'react';
import Star from '../components/star-rating/star.tsx';

const StarRating: React.FC = () => {

	const [rating, setRating] = useState<number>(-1);
	const numOfStars: number = 5;

	const handleClick = (index: number) => {
		setRating(index);
	};

	return (
		<div className="app-cont">
			<div className="container">

				<header>
					<h1>Star Rating</h1>
				</header>

				<div className="star-rating">
				{Array.from({ length: numOfStars }, (v, i) => (
					<Star
					key={i}
					starclass={i <= rating ? 'active' : 'inactive'}
					onRating={handleClick}
					starindex={i}
					/>
				))}
				</div>

			</div>
		</div>
	);
}

export default StarRating;
