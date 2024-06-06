import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import Card from '../components/github-finder/card.tsx';

interface UserData {
	avatar_url: string;
	followers: number;
	following: number;
	public_repos: number;
	name: string;
	login: string;
	created_at: string;
}

const GitHubFinderPage: React.FC = () => {
	
	const [username, setUsername] = useState<string>('LV8or');
	const [userData, setUserData] = useState<UserData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const fetchGithubUser = async () => {
		setLoading(true);
		setUserData(null);
		setError(null);

		try {
      		const response = await fetch(`https://api.github.com/users/${username}`, { headers: { 'User-Agent': 'request' } });
			if (!response.ok) {
				throw new Error(`Error: ${response.statusText}`);
			}
			const data: UserData = await response.json();
			setUserData(data);
		} catch (error: any) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		fetchGithubUser();
	};

	const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	useEffect(() => {
		fetchGithubUser();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	if (loading) {
		return <div>Loading user data...</div>;
	}

	return (
		<div className="app-cont">
			<div className="container">

				<header>
					<h1>GitHub Finder</h1>
				</header>

				{error && <div className="error-msg">{error}</div>}

				<div className="github-finder-container">
					<form className="input-wrapper" onSubmit={handleSubmit}>
						<input
							type="text"
							className="react-input"
							name="search-by-username"
							placeholder="Search GitHub Username"
							value={username}
							onChange={handleUsernameChange}
						/>
						<button type="submit" className="react-btn">Search</button>
					</form>
					{userData && <Card userData={userData} />}
				</div>
			</div>
		</div>
	);
};

export default GitHubFinderPage;
