import React, { useState, useEffect } from 'react';

const RandColorPage: React.FC = () =>  {

	const [typeOfColor, setTypeOfColor] = useState<'hex' | 'rgb'>('hex');
	const [color, setColor] = useState<string>('#000000');

	const randomColorValue = (len: number): number => {
		return Math.floor(Math.random() * len);
	};

	const createHexColor = (): void => {
		const hex = '0123456789ABCDEF';
		let hexColor = '#';

		for (let a = 0; a < 6; a++) {
			hexColor += hex[randomColorValue(hex.length)];
		}

		setColor(hexColor);
	};

	const createRGBColor = (): void => {
		const r = randomColorValue(256);
		const g = randomColorValue(256);
		const b = randomColorValue(256);
		const rgbColor = `rgb(${r},${g},${b})`;
		setColor(rgbColor);
	};

	const onHexClick = (): void => {
		setTypeOfColor('hex');
	};

	const onRgbClick = (): void => {
		setTypeOfColor('rgb');
	};

	const onRandoColor = (): void => {
		typeOfColor === 'hex' ? createHexColor() : createRGBColor();
	};

	useEffect(() => {
		if (typeOfColor === 'rgb') {
			createRGBColor();
		} else {
			createHexColor();
		}
	}, [typeOfColor]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="app-cont rand-color-cont">
			<div className="container">

				<header>
					<h1>Random Color Generator</h1>
				</header>

				<div className="color-container" style={{ background: color }}>
					<div className="color-text">
						<div className="color-type">{typeOfColor}</div>
						<div className="color-val">{color}</div>
					</div>
				</div>

				<div className="btn-cont">
					<button className="react-btn" onClick={onHexClick}>Create HEX Color</button>
					<button className="react-btn" onClick={onRgbClick}>Create RGB Color</button>
					<button className="react-btn" onClick={onRandoColor}>Generate Random Color</button>
				</div>
			</div>
		</div>
	);
}

export default RandColorPage;