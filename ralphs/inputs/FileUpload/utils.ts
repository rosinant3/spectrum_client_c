import { useCallback, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';



export const useFileActionDispatcher = (actions:any) => {

    const dispatch = useDispatch();

    const dispatchAction = useCallback((e: MouseEvent)=>{

        const target = e.target;
        console.log(target);

    }, []);

    return { dispatchAction };

};


export const getBinaryFile = function(this: unknown, ...args: any[]) {
    return fetch(args[0]).then(res => res.blob());
};

export const readBinaryFile = async function (file:any) {
    // Read into an array buffer, create
    const buffer = await file.arrayBuffer();
    // Get a byte array for that buffer
    const bytes = new Uint8Array(buffer);
    // Show it as hex text
    return new Blob([bytes]);
};