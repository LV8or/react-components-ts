import React from 'react';
import './styles.css';

interface SwitchProps {
    switchVal: boolean;
    onSwitch: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ switchVal, onSwitch }) => {
    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSwitch(event.target.checked);
    };

    return (
        <ul className="tg-list">
            <li className="tg-list-item">
                <div className="toggle-label">Mode</div>
                <input 
                    className="tgl tgl-ios" 
                    id="cb-toggle" 
                    type="checkbox" 
                    checked={switchVal} 
                    onChange={handleCheck} 
                />
                <label className="tgl-btn" htmlFor="cb-toggle"></label>
            </li>
        </ul>
    );
}

export default Switch;