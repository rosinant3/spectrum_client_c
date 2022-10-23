/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { enterList } from './StyleKeyframes';
import { useDispatch } from 'react-redux';

export const useFileUpload = ({ file, fileUpload }:{ file:any, fileUpload:any }) => {

    const dispatch = useDispatch(); 
    useEffect(()=>{

        const fileUploadCondition = 
                        file.id > 0 &&
                        file.fileId &&
                        file.progress.percentage < 100 &&
                        file.progress.startingByte > -1 &&
                        file.progress.paused === false; 
 
        if (fileUploadCondition) {
            dispatch(fileUpload(file));
        }

    }, [ file.fileId, file.progress.percentage, file.id, file.progress.startingByte, file.progress.paused]);
};

export const useFileStatus = ({ file, fileStatus }:{ file:any, fileStatus:any }) => {

    const dispatch = useDispatch(); 
    useEffect(()=>{

        const fileRequestCondition =  
                file.id > 0 && 
                file.progress.startingByte == -1 &&
                file.progress.waiting === false;

        if (fileRequestCondition) {
            dispatch(fileStatus(file));
        }

    }, [ file.fileId, file.waiting, file.paused ]);
};

export const useFileRequest = ({ file, uploadRequest }:{ file:any, uploadRequest:any }) => {

    const dispatch = useDispatch(); 
    useEffect(()=>{

        const fileRequestCondition = file.id === -1 &&
                    file.progress.waiting === false;

        if (fileRequestCondition) {
            dispatch(uploadRequest(file));
        }

    }, []);
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