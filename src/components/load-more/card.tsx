import React from 'react';

interface Product {
	thumbnail: string;
	title: string;
}

interface CardProps {
	product: Product;
}

const Card: React.FC<CardProps> = React.memo(({ product }) => {
	return (
		<div className="product">
			<img src={product.thumbnail} alt={product.title} />
			<p>{product.title}</p>
		</div>
	);
});

export default Card;
