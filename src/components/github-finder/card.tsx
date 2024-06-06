import React, { useState, useEffect } from 'react';
import './styles.css';

interface Repo {
	id: number;
	html_url: string;
	full_name: string;
}

interface UserData {
	avatar_url: string;
	followers: number;
	following: number;
	public_repos: number;
	name: string;
	login: string;
	created_at: string;
}

interface CardProps {
  	userData: UserData;
}

const Card: React.FC<CardProps> = ({ userData }) => {

	const [repos, setRepos] = useState<Repo[]>([]);
	const [hasRepos, setHasRepos] = useState(false);

	const { avatar_url, followers, following, public_repos, name, login, created_at } = userData;
	const createdDate = new Date(created_at);

	const getRepos = async () => {
		if (public_repos !== 0) {
			try {
				const apiString = `https://api.github.com/users/${login}/repos`;
        		const response = await fetch(apiString, { headers: { 'User-Agent': 'request' } });
				const data: Repo[] = await response.json();

				if (data) {
				setRepos(data);
				setHasRepos(true);
				}
			} catch (error) {
				console.error('Failed to fetch repos:', error);
			}
		}
  	};

	useEffect(() => {
		getRepos();
	}, [login, public_repos]); // eslint-disable-line react-hooks/exhaustive-deps

	const renderRepos = () => {
		return (
		<div className="user-card-bottom">
			<div className="repos-title">Repos:</div>
			{repos.map((rep) => (
			<div className="repo-link" key={rep.id}>
				<a
					href={rep.html_url}
					target="_blank"
					rel="noopener noreferrer"
				>
				{rep.full_name}
				</a>
			</div>
			))}
		</div>
		);
	};

	return (
		<div className="comp-cont user-card">
			<div className="user-card-top">

				<div className="user-card-img">
					<img
						src={avatar_url}
						className="avatar"
						alt="user"
					/>
				</div>

				<div className="user-name">

					<div className="user-name-link">
						<a
							href={`https://github.com/${login}`}
							target="_blank"
							rel="noopener noreferrer"
						>
						{name || login}
						</a>
					</div>

					<div className="user-joined">
						User joined on {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', { month: 'short' })} ${createdDate.getFullYear()}`}
					</div>

					<div className="profile-info">
						<div className="profile-info-item">Public Repos: {public_repos}</div>
						<div className="profile-info-item">Followers: {followers}</div>
						<div className="profile-info-item">Following: {following}</div>
					</div>

				</div>
			</div>
			{hasRepos && renderRepos()}
		</div>
	);
};

export default Card;
