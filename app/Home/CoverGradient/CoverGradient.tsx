import React from 'react';
import { 
    Gradient
} from './CoverGradientStyles';
import {
    GradientProps
} from './Interfaces';


const CoverGradient:React.FC<GradientProps> = () => {

  return (
    <div >
      <Gradient className="gradient">
      </Gradient>
    </div>

  );
}

export default CoverGradient;
