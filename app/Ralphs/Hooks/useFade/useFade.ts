import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const useFade = (loaded: boolean) => {

    const bckRef:any = useRef(); 

    useEffect(() => {

            const opacity = loaded ? 1 : 0;
            const ctx = gsap.context(() => {
 
                const from = { 
                    autoAlpha: 0
                };
                const to = { 
                    autoAlpha: opacity
                };
                 
                gsap.from('.fade-element', 1, from);
                gsap.to('.fade-element', 1, to);

            }, bckRef);

            return () => ctx.revert();
            
    }, [ loaded ]);


    return { bckRef };
};


export default useFade;