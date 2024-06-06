import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
	return (
		<div className="app-cont home-cont">
			<div className="container">
				<Link to="/accordion">Accordion</Link>
				<Link to="/custom-tabs">Custom Tabs</Link>
				<Link to="/github-finder">GitHub Finder</Link>
				<Link to="/image-slider">Image Slider</Link>
				<Link to="/load-more">Load More</Link>
				<Link to="/notes">Notes</Link>
				<Link to="/qrcode">QR Code Generator</Link>
				<Link to="/randcolor">Random Color Generator</Link>
				<Link to="/scrollind">Scroll Indicator</Link>
				<Link to="/scroll-to-sect">Scroll to Section</Link>
				<Link to="/search-auto-complete">Search Auto-Complete</Link>
				<Link to="/star-rating">Star Rating</Link>
				<Link to="/tic-tac-toe">Tic Tac Toe</Link>
				<Link to="/use-click-outside">Use Click Outside</Link>
				<Link to="/use-win-resize">Use Window Resize</Link>
			</div>
		</div>
	);
}

export default HomePage;
