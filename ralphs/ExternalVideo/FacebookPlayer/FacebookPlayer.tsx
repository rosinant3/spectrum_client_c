import React from 'react';
import { 
    FacebookPlayerContainer
} from './FacebookPlayerStyles';
import {
    FacebookPlayerProps
} from './Interfaces';
//import {} from './Data'; 



const FacebookPlayer:React.FC<FacebookPlayerProps> = ({ video }) => {

    const { url } = video;
    const width = '300px';
    const height = '400px';
    
  return (
    <FacebookPlayerContainer>
        <iframe 
            title={url}
            src={`https://www.facebook.com/plugins/video.php?href=${url}&tabs=timeline&width=${width}&height=${height}&small_header=false
            &adapt_container_width=true&hide_cover=false&show_facepile=true`}
            style={{ width: width, height: height, overflow: "hidden", border: "none"}}
            scrolling="no" 
            allowFullScreen={true}
            >
        </iframe>


    </FacebookPlayerContainer>
  );
}

export default FacebookPlayer;
