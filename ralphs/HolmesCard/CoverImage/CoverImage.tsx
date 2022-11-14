import React from 'react';
import {
    CoverImageContainer,
    CoverImg
} from './CoverImageStyles';
import {
    CoverImageProps
} from './Interface';
import useImageLoad from '../../Hooks/useImageLoad/useImageLoad';
import SpectrumLoader from '../../../Ralphs/SpectrumLoader/SpectrumLoader';
import useFade from '../../Hooks/useFade/useFade';
 

const CoverImage: React.FC<CoverImageProps> = ({ image }) => {

    const { src } = image;
    const { imageRef, loaded, url } = useImageLoad(src, true);

    return (
        <CoverImageContainer>
            {loaded.show && loaded.status ? 
            <CoverImg src={src} className="fade-element"/> : 
                <SpectrumLoader /> }
            <img className="fade-element" ref={imageRef} src={url} style={{display: 'none'}}  />
        </CoverImageContainer>

    );
}


export default CoverImage;