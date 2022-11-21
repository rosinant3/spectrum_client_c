import React from 'react';
import {
    ImageContainer,
    Img
} from './ImageStyles';
import { 
    ImageProps
} from './Interface';
import useImageLoad from '../Hooks/useImageLoad/useImageLoad';
import SpectrumLoader from '../../Ralphs/SpectrumLoader/SpectrumLoader';
import useFade from '../Hooks/useFade/useFade';

const Image: React.FC<ImageProps> = ({ image, active }) => {

    const { src } = image;  
    const { imageRef, loaded, url } = useImageLoad(src, active);
    const { bckRef } = useFade(loaded.status); 
    
    return (
        <ImageContainer ref={bckRef}>
            {loaded.show && loaded.status ? 
            <Img className="fade-element" src={url}  /> : 
                <SpectrumLoader /> }
            <img className="fade-element" ref={imageRef} src={url} style={{display: 'none'}}  />
        </ImageContainer>

    );
}


export default Image;