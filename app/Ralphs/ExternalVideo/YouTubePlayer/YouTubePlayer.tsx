import React from 'react';
import { 
    YouTubePlayerContainer
} from './YouTubePlayerStyles';
import {
    YouTubePlayerProps
} from './Interfaces';
import {
    opts
} from './Data'; 

/* import YouTube from 'react-youtube'; <YouTube videoId={video.url} opts={opts} /> */
const YouTubePlayer:React.FC<YouTubePlayerProps> = ({ video }) => {

    const { url } = video;
    
  return (
    <YouTubePlayerContainer>
        
    </YouTubePlayerContainer>
  );
}

export default YouTubePlayer;
