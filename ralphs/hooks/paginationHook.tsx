import { useEffect, useRef, useState } from 'react';
import { useSpring } from 'react-spring';



export const usePagination = (iOpen: boolean = true, getSlideContainerWidthLarge: any = null)=> {

    const dragRef: any = useRef(null);
    const buttonRef: any = useRef(null);
    const [ active, setActive ] = useState(0);
    const [ t, setT ] = useState(0);
    const [propss, set ] = useSpring(() => ( transform: "translate3d(0px, 0px, 0px)", height: "100%"}));

   useEffect(()=>{

        const container = dragRef.current;
        let dragging = false;
        let start = 0;
        let translateXDrag = 0;
        let preventClick = false;
        
    	const getSlideContainerWidth = () => {

        	const container = dragRef.current;
    
        	if (container) {
    
            		const width = container.getBoundingClientRect().width;
            		const limit = width;
            		const translateX = t + translateXDrag;
            		if (translateX < 0 && translateX < limit) {
                		setT(translateX);
                		set({ transform: `translate3d(${translateX}px, 0px, 0px)`, height: "100%" });
            		} else if (translateX > 0) {
				setT(0);
				set({ transform: `translate3d(0px, 0px, 0px)`, height: '100%' });
            		} else if (translateX > limit) {
                		set({ transform: `translate3d(${limit}px, 0px, 0px)`, height: '100%' });
            		}
        	}
    
        	return 0;
       	};

        const dragFunction = (e:any) => {

            e.stopPropagation();
            if (dragging) {

                let pageX;
                preventClick = true;
                if (e.type === "touchmove") {
                    pageX = e.touches[0].pageX;
                } else {
                    pageX = e.pageX;
                }

                if (start === 0) {
                    start = pageX;
                } else if (pageX !== 0) {
                    translateXDrag = pageX - start;
                    set({ transform: `translate3d(${translateXDrag + t}px, 0px, 0px)`});
                    // minus is right start - pageX
                }
            }
        }

        const dragStartFunction = (e:any) => {
		e.stopPropagation();
		dragging = true;
        }

        const dragEndFunction = (e:any) => {

        	e.stopPropagation();
        	start = 0;
        	dragging = false;
 
       		if (translateXDrag < 0) {
        		getSlideContainerWidth();
        	} else if (translateXDrag > 0) {
        		getSlideContainerWidth();
        	} else {
       			set({ transform: `translate3d(${t}px, 0px, 0px)`, height: "100%" });
            	}
            	translateXDrag = 0;
            	setTimeout(()=>{ preventClick = false }, 10);
        }

        const clickFunction = (e:any) => {

		const target = e.target;
		const targetRect = target.getBoundingClientRect();
		const targetWidth = targetRect.width;
		let index = target.dataset.index;

		if (!preventClick && index) {
			e.stopPropagation();
			const scrollWidth = targetWidth * index;
			setActive(index);
		    if (getSlideContainerWidthLarge) {
			getSlideContainerWidthLarge('dot', index);
		    }
		}
        }

	if (container) {
		container.addEventListener('mousedown', dragStartFunction);
		container.addEventListener('mousemove', dragFunction);
		container.addEventListener('mouseup', dragEndFunction);
		container.addEventListener('mouseleave', dragEndFunction);
		container.addEventListener("touchstart", dragStartFunction);
		container.addEventListener("touchend", dragEndFunction);
		container.addEventListener("touchmove", dragFunction);
		container.addEventListener("click", clickFunction);
	}

        return () => { 
            
            if (container) {
                container.removeEventListener('mousedown', dragStartFunction);
                container.removeEventListener('mousemove', dragFunction);
                container.removeEventListener('mouseup', dragEndFunction);
                container.removeEventListener('mouseleave', dragEndFunction);
                container.removeEventListener("touchstart", dragStartFunction);
                container.removeEventListener("touchend", dragEndFunction);
                container.removeEventListener("touchmove", dragFunction);
                container.removeEventListener("click", clickFunction);
            }
        };

   }, [ dragRef, active, t, set, iOpen ]);

   return { propss, active, setActive, dragRef, buttonRef };
}
