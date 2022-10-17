import { useState, useCallback } from 'react';




export const useOpenComment = () => {

    const [ open, setOpen ] = useState(false);

    const toggleSetOpen = useCallback(()=>{
        setOpen(!open);
    }, [open])

    return { open, toggleSetOpen };

};