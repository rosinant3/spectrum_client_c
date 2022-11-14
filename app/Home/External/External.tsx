import React from 'react';
import { 
    ExternalContainer,
    ExternalGrid,
    HeadingText
} from './ExternalStyles';
import {
    ExternalProps
} from './Interfaces';
import ExternalVideo from '../../Ralphs/ExternalVideo/ExternalVideo';
/* 
import {
    data
} from './Data';
*/

const External:React.FC<ExternalProps> = () => {
  return (
    <ExternalContainer>
        <HeadingText>
            External
        </HeadingText>
        <ExternalGrid>
            <ExternalVideo />
        </ExternalGrid>
    </ExternalContainer>
  );
}

export default External;
