import React, { useState, useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside.ts';

const UseOutsideClickPage: React.FC = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);
    const excludeRef = useRef<HTMLButtonElement>(null);

    useClickOutside(componentRef, () => setIsOpen(false), excludeRef);

    return (
        <div className="app-cont">
            <div className="container">
                
                <header>
                    <h1>Use Outside Click</h1>
                </header>

                <button className="react-btn" ref={excludeRef} onClick={() => setIsOpen(true)}>
                    Open Text
                </button>

                {isOpen && (
                    <div ref={componentRef} className="co-text">
                        Text
                    </div>
                )}

            </div>
        </div>
    );
};

export default UseOutsideClickPage;