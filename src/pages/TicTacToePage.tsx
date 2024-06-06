import React, { useState, useEffect } from 'react';
import Square from '../components/tic-tac-toe/square.tsx';

const TicTacToePage: React.FC = () => {
	
	const [squares, setSquares] = useState<Array<string>>(Array(9).fill(''));
	const [isXTurn, setIsXTurn] = useState<boolean>(true);
	const [status, setStatus] = useState<string>('');

	const squareClick = (index: number) => {
		const newSquares = [...squares];

		if (getWinner(newSquares) || newSquares[index]) return;

		newSquares[index] = isXTurn ? 'X' : 'O';
		setSquares(newSquares);
		setIsXTurn(!isXTurn);
	};

	const getWinner = (squares: Array<string>): string | null => {
		const winningPatterns: Array<Array<number>> = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let pattern of winningPatterns) {
			const [a, b, c] = pattern;
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}

		return null;
	};

	const handleRestart = () => {
		setIsXTurn(true);
		setSquares(Array(9).fill(''));
	};

	useEffect(() => {
		const winner = getWinner(squares);
		if (winner) {
		setStatus(`Winner is ${winner}`);
		} else if (squares.every(square => square)) {
		setStatus('This is a draw, please restart game.');
		} else {
		setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`);
		}
	}, [squares, isXTurn]);

	return (
		<div className="app-cont">
			<div className="container">

				<header>
					<h1>Tic Tac Toe</h1>
				</header>

				<div className="ttt-container">
					
					<div className="row">
						<Square value={squares[0]} handleClick={() => squareClick(0)} />
						<Square value={squares[1]} handleClick={() => squareClick(1)} />
						<Square value={squares[2]} handleClick={() => squareClick(2)} />
					</div>
					<div className="row">
						<Square value={squares[3]} handleClick={() => squareClick(3)} />
						<Square value={squares[4]} handleClick={() => squareClick(4)} />
						<Square value={squares[5]} handleClick={() => squareClick(5)} />
					</div>
					<div className="row">
						<Square value={squares[6]} handleClick={() => squareClick(6)} />
						<Square value={squares[7]} handleClick={() => squareClick(7)} />
						<Square value={squares[8]} handleClick={() => squareClick(8)} />
					</div>
					
					<div className="status">{status}</div>
					
					<button className="react-btn" onClick={handleRestart}>Restart</button>

				</div>
			</div>
		</div>
	);
}

export default TicTacToePage;