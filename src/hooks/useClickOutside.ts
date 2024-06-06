import { useEffect, RefObject } from 'react';

function useClickOutside(
    componentRef: RefObject<HTMLElement>,
    callback: () => void,
    excludeComponentRef?: RefObject<HTMLElement>
): void {

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (
                componentRef.current && 
                (componentRef.current.contains(event.target as Node) ||
                (excludeComponentRef && excludeComponentRef.current && excludeComponentRef.current.contains(event.target as Node)))
            ) {
                return;
            }

            callback();
        };

        window.addEventListener('click', listener);

        return () => {
            window.removeEventListener('click', listener);
        };
    }, [componentRef, callback, excludeComponentRef]);
}

export default useClickOutside;
