import React from 'react';
import styled from '@emotion/styled';

const Head = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0.5rem;
`;

const Name = styled.div`
    cursor: default;
`;

interface SwiperImageProps {
    name:any;
};
  
const SwiperImage: React.FC<SwiperImageProps> = ({ name }) => {
    return (<Head>
        
    </Head>);
}
/* <Name>{name}</Name> */

export default SwiperImage;