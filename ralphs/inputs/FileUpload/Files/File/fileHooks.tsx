/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { enterList } from './StyleKeyframes';
import { useDispatch } from 'react-redux';

export const useFileUpload = ({ file, index, fileUpload }:{ file:any, index: number, fileUpload:any }) => {

    const dispatch = useDispatch(); 
    useEffect(()=>{

        const fileUploadCondition = 
                        file.fileId !== '' && 
                        file.progress.waiting === false; // &&
                      //  file.paused === false &&
                      //  file.aborted === false;

        if (fileUploadCondition) {
            dispatch(fileUpload(file));
        }

    }, [ index, file.fileId ]);
};

export const useFileStatus = ({ file, index, fileStatus }:{ file:any, index: number, fileStatus:any }) => {

    const dispatch = useDispatch(); 
    useEffect(()=>{

        const fileRequestCondition =  
                file.fileId === '' && 
                file.progress.waiting === false &&
                file.paused === false;

        if (fileRequestCondition) {
            //dispatch(fileStatus(file));
        }

    }, [ index, file.fileId, file.waiting, file.paused ]);
};

export const useFileRequest = ({ file, index, uploadRequest }:{ file:any, index: number, uploadRequest:any }) => {

    const dispatch = useDispatch(); 
    useEffect(()=>{

        const fileRequestCondition = file.fileId === '' 
                                && file.progress.waiting === false;
        if (fileRequestCondition) {
            dispatch(uploadRequest(file));
        }

    }, [ index ]);
};

export const useOpacity = (waiting:boolean) => {
    const [ opacity, setOpacity ] = useState(false);
    useEffect(()=>{
        if (waiting) {
            setOpacity(true);
        } else {
            setOpacity(false);
        }
    }, [ waiting ]);
    return opacity;
};

export const useEnterAnimation = ({ index }: { index: number }) => {
    const [ style, setStyle ] = useState(css`opacity: 0;`);
    useEffect(()=>{
        setTimeout(()=>{
            setStyle(css`
                opacity: 1;
                animation: ${enterList} 1000ms ease;
            `);
        }, index * 1000);
    }, [ index ]);
    return style;
};