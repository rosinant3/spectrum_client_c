import { useEffect, useRef } from 'react';
import { SignInType } from './Interfaces';
import gsap from 'gsap';

const useActiveLoginOpacity:any = (type: SignInType) => { 

    const containerRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            const from = { 
                autoAlpha: 0
            }; 
            const to = { 
                autoAlpha: 0.5
            };
                
            gsap.from(`.${type}`, 1, from);
            gsap.to(`.${type}`, 1, to);

        }, containerRef);

        return () => ctx.revert();
            
    }, [ type ]);

    return { containerRef };
};

export default useActiveLoginOpacity;