import * as React from 'react';
import { useSlicedImages } from './ImagesHooks';
import Image from './Image/Image';
import { ImagesContainer } from './ImagesStyles';

const Images = () => {

    const { images } = useSlicedImages();

  return ( 
      <ImagesContainer>
        {images.map((image_, index)=>{
            return <Image key={index} image={image_} index={index}/>
        })}
      </ImagesContainer>
  );
}

export default Images;
