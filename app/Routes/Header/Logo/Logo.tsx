import React from 'react';

import { 
    LogoContainer
} from './LogoStyles';
import {
    LogoProps
} from './Interfaces';
import {
  Link
} from 'react-router-dom';

const Logo:React.FC<LogoProps> = () => {
  return (
    <LogoContainer>
        <Link to="/">Krav Maga Tuzla</Link>
    </LogoContainer>
  );
}

export default Logo;
