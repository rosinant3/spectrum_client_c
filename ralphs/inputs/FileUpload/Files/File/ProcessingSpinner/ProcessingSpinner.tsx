
import * as React from 'react';
import { SmallSpinnerContainer } from './ProcessingSpinnerStyles';
import { SpawnSpinner } from '../../../../../../utility/appUtility';

interface ProcessingSpinnerProps {};
  
const ProcessingSpinner: React.FC<ProcessingSpinnerProps> = () => {

  return ( 
    <SmallSpinnerContainer>
        {SpawnSpinner('var(--mainActiveColor)')}
    </SmallSpinnerContainer>
  );
}

export default ProcessingSpinner;







