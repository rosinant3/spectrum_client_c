/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/react';
import { enterList } from './StyleKeyframes';

export const useOpacity = (index) => {

    const [ opacity, setOpacity ] = useState(false);

    useEffect(()=>{

        if (index === 0) {
            setOpacity(true);
        }

    }, [ index ])

    return opacity;
};

export const useEnterAnimation = ({ index }) => {

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