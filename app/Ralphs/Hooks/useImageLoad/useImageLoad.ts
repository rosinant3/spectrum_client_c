import { useState, useEffect, useRef, useCallback } from 'react';


const useLoadListener = (ref:any, active:boolean) => { 
    const [ loaded, setLoaded ] = useState({ status: false, show: false });
    useEffect(()=>{

        const imageOnLoad = ()=>{ setLoaded({ ...loaded, status: true }); };
            
        if (ref.current.src.slice(-1) !== '/' && loaded.status === false) {
            imageOnLoad();
        }

        if (ref.current) {
            ref.current.addEventListener('load', imageOnLoad);
        }
        return () => {
            if (ref.current) {
                ref.current.removeEventListener('load', imageOnLoad);
            }
        }
    }, [loaded, active]);
    
    useEffect(()=>{
            if (active && active !== loaded.show) {
                setLoaded({ ...loaded, show: true });
            }
    }, [ active, loaded ]);

    return { loaded };
};


const useErrorListener = (ref:any, src:string) => { 
    const [ url, setUrl ] = useState('');

    useEffect(()=>{
        setUrl(src);
    }, [])

    useEffect(()=>{
        const imageOnError = () => {
            if (url !== '') {
                setUrl('./placeholder.jpg');
            }
        };
        if (ref.current) {
            ref.current.addEventListener('error', imageOnError);
        }
        return () => {
            if (ref.current) {
                ref.current.removeEventListener('error', imageOnError);
            }
        }
    }, [url]);

    return { url };
}

const useImageLoad = (src:string, active:boolean) => { 

    const imageRef:any = useRef();
    const { loaded } = useLoadListener(imageRef, active);
    const { url } = useErrorListener(imageRef,src);

    return  { loaded, imageRef, url };

};


export default useImageLoad;