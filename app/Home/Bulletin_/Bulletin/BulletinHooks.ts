import { useState, useCallback, useEffect } from 'react';

export const useActiveBulletin = (dataLength: number) => {

    const [ active, setActive ] = useState(0);


    const nextBulletin = useCallback(()=>{
        if (active === dataLength - 1) {
            setActive(0);
        } else {
            setActive(active + 1);
        }
    }, [active]);

    useEffect(()=>{
        const id = setInterval(() => nextBulletin(), 15000)
        return () => clearInterval(id)
    }, [active]);


    return { active, nextBulletin }
};