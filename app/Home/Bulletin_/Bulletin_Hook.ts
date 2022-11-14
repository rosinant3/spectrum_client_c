import { useState, useEffect } from 'react';

export const useBulletinFetch = () => {

    const [ data, setData ] = useState({
        list: [
            {
                id: 1,
                title: "Heading 1",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.`,
                image: {
                    src: "./uploads/header12.jpg" 
                }
            },    
            {
                id: 2,
                title: "Heading 2",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.`,
                image: {
                    src: "./uploads/header2.jpg" 
                }
            }
        ],
        page: {
            fetched: false
        }
    });

    useEffect(()=>{

        setTimeout(()=>{
            setData({ ...data, page: { ...data.page, fetched: true } });
        }, 1000);

    }, [])

    return data;

};



export default {};