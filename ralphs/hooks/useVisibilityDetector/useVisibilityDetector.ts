import { useState, useEffect, useRef, useCallback } from 'react';
import { throttle, isVisible } from './utils';

const useVisibilityDetector = (once: boolean, parent = window) => { 

    const childRef:any = useRef();
    const [ visible, setVisible ] = useState(false);

    useEffect(()=>{

        const visibilityDetector = () => {
            const child = childRef.current;
            const visibilityStatus = isVisible(child, parent);
            setVisible(visibilityStatus);
            if (once && visibilityStatus) {
                parent.removeEventListener('scroll', visibilityDetector_);
            }
        };
        
        const visibilityDetector_ = throttle(visibilityDetector, 300, {});
        parent.addEventListener('scroll', visibilityDetector_);
        visibilityDetector();

        return () => {
            parent.removeEventListener('scroll', visibilityDetector_);
        };

    }, [ childRef ]);


    return { childRef, visible };

};


export default useVisibilityDetector;