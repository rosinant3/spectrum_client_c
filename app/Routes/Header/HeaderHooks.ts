import { useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';



export const useActiveRoute = () => {
    const match = useMatch('*');
    const [ showSingIn, setShowSingIn ] = useState(true);
    useEffect(()=>{
        if (match?.pathname === '/login') {
            setShowSingIn(false);
        }
    }, []);
    return { showSingIn };
};