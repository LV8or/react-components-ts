import React, { useRef } from 'react';

interface DataType {
	id: number;
	label: string;
	style: React.CSSProperties;
}

const ScrollToSectPage: React.FC = () => {
	const els = useRef<(HTMLDivElement | null)[]>([]);
	const data: DataType[] = [
		{
			id: 1,
			label: 'First Card',
			style: {
				width: '100%',
				height: '600px',
				background: 'red',
			},
		},{
			id: 2,
			label: 'Second Card',
			style: {
				width: '100%',
				height: '600px',
				background: 'green',
			},
		},{
			id: 3,
			label: 'Third Card',
			style: {
				width: '100%',
				height: '600px',
				background: 'blue',
			},
		},{
			id: 4,
			label: 'Fourth Card',
			style: {
				width: '100%',
				height: '600px',
				background: 'grey',
			},
		},{
			id: 5,
			label: 'Fifth Card',
			style: {
				width: '100%',
				height: '600px',
				background: 'orange',
			},
		},
	];

	const scrollToSection = () => {
		const elsTop = els.current[2]?.getBoundingClientRect()?.top;
		const pos = elsTop !== undefined ? elsTop - 77 : 0;
		if (pos !== undefined) {
			window.scrollTo({
				top: pos,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div className="app-cont">
			<div className="container">

				<header>
					<h1>Scroll To Section</h1>
				</header>

				<div>
				
				<button className="react-btn scroll-btn" onClick={scrollToSection}>Scroll to Third Card</button>

				{data.map((d, i) => (
				<div
					key={d.id}
					style={d.style}
					ref={(el) => (els.current[i] = el)}
				>
					<h3>{d.label}</h3>
				</div>
				))}
				</div>
				
			</div>
		</div>
	);
}

export default ScrollToSectPage;