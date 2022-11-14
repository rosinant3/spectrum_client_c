import React from 'react';
import { 
    VimeoPlayerContainer
} from './VimeoPlayerStyles';
import {
    VimeoPlayerProps
} from './Interfaces';
import Vimeo from '@u-wave/react-vimeo';
//import {} from './Data'; 


const VimeoPlayer:React.FC<VimeoPlayerProps> = ({ video }) => {

    const { url } = video;
    const width = '300px';
    const height = '400px';
    
  return (
    <VimeoPlayerContainer>
        <Vimeo video="x2to0hs" autoplay />
    </VimeoPlayerContainer>
  );
}

export default VimeoPlayer;
