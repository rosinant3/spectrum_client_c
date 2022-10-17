import { useState } from 'react';

export const useActiveIndex = () => {
    const [ activeIndex, setActiveIndex ] = useState(0);
    return { activeIndex, setActiveIndex };
};