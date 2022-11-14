import React from 'react';
import { 
    HolmesCardContainer,
    CardTitle,
    CardOpen,
} from './HolmesCardStyles';
import {
    HolmesCardProps
} from './Interfaces';
import {
  useCardTitle
} from './HolmesCardHooks';
import CoverImage from './CoverImage/CoverImage';
import useVisibilityDetector from '../Hooks/useVisibilityDetector/useVisibilityDetector';
import useFade from '../Hooks/useFade/useFade';

const HolmesCard:React.FC<HolmesCardProps> = ({ post }) => {

  const { title, image } = post; 
  const { title_ } = useCardTitle(title); 
  const { childRef, visible } = useVisibilityDetector(false);
  let { bckRef } = useFade(visible); bckRef
  
  return ( 
    <HolmesCardContainer ref={childRef}>
        <div ref={bckRef}>
          <div className='fade-element'>
            {visible ? <><CoverImage image={image} />
            <CardTitle>{ title_ }</CardTitle>
            <CardOpen><a href="#">Open</a></CardOpen></> : <></>}
          </div>
        </div>
    </HolmesCardContainer>
  );
}

export default HolmesCard;
