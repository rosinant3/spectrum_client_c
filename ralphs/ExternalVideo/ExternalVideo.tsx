import React from 'react';
import { 
    ExternalVideoContainer
} from './ExternalVideoStyles';
import {
    ExternalVideoProps
} from './Interfaces';
/* 
import {
    data
} from './Data';
*/

const ExternalVideo:React.FC<ExternalVideoProps> = () => {
  return (
    <ExternalVideoContainer>
        <iframe width="100%" height="500"
        src="https://www.youtube.com/embed/v=B8aXidTUnJc">
        </iframe>
    </ExternalVideoContainer>
  );
}

export default ExternalVideo;
