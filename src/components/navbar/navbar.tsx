import { useContext } from 'react';
import { AppContext } from '../../context/appcontext.tsx';
import { Link } from 'react-router-dom';
import './navbar.css';
import Switch from '../switch/switch.tsx';

interface NavbarProps {
	customScroll?: boolean;
	darkMode?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ customScroll, darkMode = false }) => {
	const { scrollPerc, darkTheme = false, handleDarkTheme } = useContext(AppContext) ?? {};

	const onSwitch = () => {
		if (handleDarkTheme) {
			handleDarkTheme();
		}
	};

	return (
		<div className="navbar">

			<div className="container">
				<Link to="/">
				<div className="logo-title">
					<img src="/react-logo.png" alt="logo" />
					<div className="nav-title">
					React Components (<i>TypeaScript</i>)
					</div>
				</div>
				</Link>
				<Switch switchVal={darkTheme} onSwitch={onSwitch} />
			</div>

			{customScroll && (

			<div className="custom-scroll">
				<div className="scroll-progress">
					<div
					className="progress-bar"
					style={{ width: `${scrollPerc}%` }}
					></div>
				</div>
			</div>
			
			)}
		</div>
	);
};

export default Navbar;
