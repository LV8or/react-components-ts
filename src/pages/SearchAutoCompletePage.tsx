import React, { useState, useEffect } from 'react';

interface User {
  firstName: string;
}

const AutoComplete: React.FC = () => {

	const [loading, setLoading] = useState<boolean>(true);
	const [users, setUsers] = useState<string[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [searchParams, setSearchParams] = useState<string>('');
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const [filteredUsers, setFilteredUsers] = useState<string[]>([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch('https://dummyjson.com/users');
				const data: { users: User[] } = await response.json();

				if (data && data.users && data.users.length) {
				setUsers(data.users.map((userItem) => userItem.firstName));
				setLoading(false);
				setError(null);
				}
			} catch (err: unknown) {
				setError((err as Error).message);
				setLoading(false);
				console.error(error);
			}
		};
		fetchUsers();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value.toLowerCase();
		setSearchParams(query);

		if (query.length > 0) {
			const filteredData = users.filter((item) => item.toLowerCase().includes(query));
			setFilteredUsers(filteredData);
			setShowDropdown(true);
		} else {
			setShowDropdown(false);
		}
	};

	const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
		setSearchParams(e.currentTarget.innerText);
		setShowDropdown(false);
		setFilteredUsers([]);
	};

	if (loading) {
		return <div>Loading users...</div>;
	}

	return (
			<div className="app-cont auto-complete-cont">
				<div className="container">

					<header>
						<h1>Search Auto-Complete</h1>
					</header>

					{error && <div className="error-msg">{error}</div>}
					
					<div className="search-container">
						
						<input
							className="react-input"
							name="search-name"
							onChange={handleSearch}
							value={searchParams}
							autoComplete="off"
							placeholder="Search users here..."
						/>
						
						{showDropdown && (

						<ul className="users">
						{filteredUsers.map((u, i) => (
							<li key={i} onClick={handleClick}>
							{u}
							</li>
						))}
						</ul>
						
						)}
					</div>
				</div>
			</div>
	);
};

export default AutoComplete;
