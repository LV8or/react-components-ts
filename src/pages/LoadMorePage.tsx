import React, { useState, useEffect } from 'react';
import Card from '../components/load-more/card.tsx';

interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}

interface ProductsResponse {
	products: Product[];
	total: number;
	skip: number;
	limit: number;
}

const LoadMorePage: React.FC = () => {

	const [items, setItems] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [count, setCount] = useState<number>(0);
	const [limit, setLimit] = useState<boolean>(false);

	const fetchItems = async () => {
		setLoading(true);
		try {
			const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
			const newItems: ProductsResponse = await response.json();

			setItems(prevItems => [...prevItems, ...newItems.products]);

			if (count === 4) setLimit(true);
		} catch (error) {
			console.error('Error fetching items:', error);
		}
		setLoading(false);
	};

	const handleClick = () => {
		setCount(prevCount => prevCount + 1);
		console.log(count);
	};

	useEffect(() => {
		fetchItems();
	}, [count]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="app-cont">
			<div className="container">
				<header>
					<h1>Load More</h1>
				</header>
				<div className="products-container">
					<div className="products">
						{items.map((item) => (
							<Card key={item.id} product={item} />
						))}
					</div>
				</div>
				<div className="button-container">
					{!limit ? (
						<button className="react-btn" onClick={handleClick}>
							{loading ? 'Loading...' : 'Load More Items'}
						</button>
					) : (
						<div>You have reached the item limit.</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default LoadMorePage;