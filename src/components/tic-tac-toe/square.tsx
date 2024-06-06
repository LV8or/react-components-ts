import React from 'react';
import './styles.css';

interface SquareButtonProps {
  value: string;
  handleClick: () => void;
}

const SquareButton: React.FC<SquareButtonProps> = ({ value, handleClick }) => {
	return (
		<button className="btn-square" onClick={handleClick}>{value}</button>
	);
}
  
export default SquareButton;
