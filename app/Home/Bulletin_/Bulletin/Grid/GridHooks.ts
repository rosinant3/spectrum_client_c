import { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";


export const useActiveIndex = (active:number, index:number) => {

    const [ activeIndex, setActiveIndex ] = useState(false);

    useEffect(()=>{
        setActiveIndex(active === index);
    }, [ active ])

    return { activeIndex };
};

export const useTransition = (activeIndex:boolean) => {

    const gridRef:any = useRef(); // create a ref for the root level element (we'll use it later)

    useEffect(() => {

            const opacity = activeIndex ? 1 : 0;
            const display = activeIndex ? 'grid' : 'none';
            const x = activeIndex ? '0px' : '500px';
            
            const ctx = gsap.context(() => {

                const from = { 
                    autoAlpha: 0, 
                    display: display,
                    x: '500px'
                };
                const to = { 
                    autoAlpha: opacity, 
                    display: display,
                    x: x
                };
                
                gsap.from('.bulletin-grid', 1, from);
                gsap.to('.bulletin-grid', 1, to);

            }, gridRef);

            return () => ctx.revert();
            
    }, [activeIndex]);


    return { gridRef };
};