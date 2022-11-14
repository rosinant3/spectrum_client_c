import React from 'react';
import { 
    SingInButton
} from './SingInStyles';
import {
    SingInProps
} from './Interfaces';
import {
  Link
} from 'react-router-dom';

const SingIn:React.FC<SingInProps> = () => {
  return (
    <SingInButton>
        <Link to="/login">Sing in</Link>
    </SingInButton>
  );
}

export default SingIn;
