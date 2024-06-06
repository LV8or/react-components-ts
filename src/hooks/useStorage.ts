import { useState, useEffect } from 'react';

const getItem = (key: string, storage: Storage | null): any => {
    let value = storage?.getItem(key);
    if (!value) {
        return null;
    }
    try {
        return JSON.parse(value);
    } catch (error) {
        return value;
    }
};

const useStorage = (key: string, type: 'session' | 'local' = 'session'): [any, (newValue: any) => void] => {
    
	let storage: Storage | null;
    switch (type) {
        case 'session':
            storage = sessionStorage;
            break;
        case 'local':
            storage = localStorage;
            break;
        default:
            storage = null;
    }

    const [value, setValue] = useState(() => getItem(key, storage));

    useEffect(() => {
        storage?.setItem(key, JSON.stringify(value));
    }, [key, value, storage]);

    const setItem = (newValue: any) => {
        setValue(newValue);
    };

    return [value, setItem];
};

export default useStorage;
