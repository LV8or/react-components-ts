import { useState, useEffect } from 'react';

interface FetchResult<T> {
	data: T | null;
	loading: boolean;
	error: string | null;
}

export default function useFetch<T = unknown>(url: string): FetchResult<T> {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);

			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`Error: ${response.statusText}`);
				}
				const result: T = await response.json();
				setData(result);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { data, loading, error };
}