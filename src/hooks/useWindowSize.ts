import { useState, useEffect } from 'react';

interface WindowSize {
    browserWidth: number;
    deviceWidth: number;
    isMobile: boolean;
}

export default function useWindowSize(): WindowSize {
    
    const [browserWidth, setBrowserWidth] = useState<number>(window.innerWidth);
    const [deviceWidth, setDeviceWidth] = useState<number>(window.screen.width);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 600);

    const browserResized = () => {
        setBrowserWidth(window.innerWidth);
        setDeviceWidth(window.screen.width);
        setIsMobile(window.innerWidth <= 600);
    };

    useEffect(() => {
        window.addEventListener('resize', browserResized);

        return () => {
            window.removeEventListener('resize', browserResized);
        };
    }, []);

    return {
        browserWidth,
        deviceWidth,
        isMobile
    };
}
