/** @jsxRuntime classic */
/** @jsx jsx */
import { ImageContainer, ImageLoadingAnimation } from './ImageStyles';
import { useOpacity, useEnterAnimation } from './imageHooks';
import { jsx } from '@emotion/react';
import RemoveIcon from './RemoveIcon/RemoveIcon';

const Image = ({ image, index }) => {
 
    const { url } = image;
    const opacity = useOpacity(index);
    const style = useEnterAnimation({ index });
 
  return ( 
      <ImageContainer css={style} style={{ backgroundImage: `url(${url})` }}>
        <RemoveIcon id={image.id}></RemoveIcon>
        {opacity && <ImageLoadingAnimation></ImageLoadingAnimation>}
      </ImageContainer>
  );
}

export default Image;
