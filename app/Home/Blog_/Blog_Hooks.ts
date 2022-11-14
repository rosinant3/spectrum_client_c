import { useState, useEffect } from 'react';

export const useBlogFetch = (visible:boolean) => {

    const [ data, setData ] = useState({
        list: [
            {
                id: 1,
                title: "Blog Post 1",
                image: {
                    src: "./uploads/header1.jpg" 
                }
            },  
            {
                id: 2,
                title: "Blog Post 2",
                image: {
                    src: "./uploads/header1.jpg" 
                }
            },   
            {
                id: 3,
                title: "Blog Post 3",
                image: {
                    src: "./uploads/header1.jpg" 
                }
            },   
            {
                id: 4,
                title: "Blog Post 4",
                image: {
                    src: "./uploads/header1.jpg" 
                }
            },   
            {
                id: 5,
                title: "Blog Post 5",
                image: {
                    src: "./uploads/header1.jpg" 
                }
            }
        ],
        page: {
            fetched: false
        }
    });

    useEffect(()=>{

        if (visible && !data.page.fetched) {
            setTimeout(()=>{ 
                setData({ ...data, page: { ...data.page, fetched: true } });
            }, 1000);
        }


    }, [ visible ])

    return data;

};



export default {};