import React from 'react';
import useWindowSize from "../hooks/useWindowSize.ts";

const UseWindowResizePage: React.FC = () => {
    const { browserWidth, deviceWidth, isMobile } = useWindowSize();
    const device = isMobile ? "Mobile" : "Web";

    return (
        <div className="app-cont">
            <div className="container">

                <header>
                    <h1>Use Window Resize</h1>
                </header>

                <div className="win-size-text">{browserWidth} pixels: Browser</div>
                <div className="win-size-text">{deviceWidth} pixels: Device</div>
                <div className="device">{device}</div>

            </div>
        </div>
    );
};

export default UseWindowResizePage;
