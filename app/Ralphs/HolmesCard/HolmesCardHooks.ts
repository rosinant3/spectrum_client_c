import { useEffect, useState } from 'react';




export const useCardTitle = (title:string) => {

    const [ title_, setTitle ] = useState("");

    useEffect(()=>{

        if(title.length > 120) {
            setTitle(`${title.slice(0, 120)}...`)
        } else {
            setTitle(title);
        }
        
    }, [title]);

    return { title_ };
};
 









export default {};