import React from 'react';
import { 
    UserLoginContainer
} from './UserLoginStyles';
import {
    UserLoginProps
} from './Interfaces';
/*
import {
  useLoginSingupToggle
} from './UserLoginHooks';
*/

const UserLogin:React.FC<UserLoginProps> = () => {

  //const { formState, setState } = useLoginSingupToggle();


  return (
    <UserLoginContainer>


    USER LOGIN WORKS!


    </UserLoginContainer>
  );
}

export default UserLogin;
