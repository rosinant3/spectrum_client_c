import { useEffect, useRef } from 'react';
import { useMatch } from 'react-router';
import gsap from 'gsap';

const useActiveRouteOpacity = () => { 

    const menuRef:any = useRef(); 
    const match = useMatch('*');

    useEffect(() => {

        const pathname = match?.pathname.replace(/\//g, '-');

        const ctx = gsap.context(() => {

            const from = { 
                autoAlpha: 0
            };
            const to = { 
                autoAlpha: 0.5
            };
                
            gsap.from(`.${pathname}w`, 1, from);
            gsap.to(`.${pathname}w`, 1, to);

        }, menuRef);

        return () => ctx.revert();
            
    }, [  ]);


    return { menuRef };

   

};


export default useActiveRouteOpacity;