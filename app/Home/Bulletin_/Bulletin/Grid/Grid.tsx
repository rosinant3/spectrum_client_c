import React from 'react';
import { 
    BulletinGrid,
    GridContainer,
    BulletinSection,
    HomePageHeading,
    HeadingText,
    DescriptionText,
    ImageContainer
} from './GridStyles';
import {
    GridProps
} from './Interfaces';
import Image from '../../../../Ralphs/Image/Image';
import { useTransition, useActiveIndex } from './GridHooks';
 
const Grid:React.FC<GridProps> = ({ template, active, index }) => {
    
    const { title, description, image } = template;
    const { activeIndex } = useActiveIndex(active, index);
    const { gridRef } = useTransition(activeIndex);

  return (
    <GridContainer ref={gridRef}>
        <BulletinGrid className='bulletin-grid'  >
            <BulletinSection>
                <HomePageHeading>
                    <HeadingText>
                        {title}
                    </HeadingText>
                    <DescriptionText>
                        {description}
                    </DescriptionText>
                </HomePageHeading>
            </BulletinSection>
            <BulletinSection>
                <ImageContainer>
                    <Image image={image} active={activeIndex} />
                </ImageContainer>
            </BulletinSection>
        </BulletinGrid>
    </GridContainer>

  );
}

export default Grid;
