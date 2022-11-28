import React from 'react';
import useSingInStore from '../Store/Store';
import { SignInHeader, TypeSpan } from './SignInStyles';
import useActiveLoginOpacity from '../../Ralphs/Hooks/useActiveLoginOpacity/useActiveLoginOpacity';
import { AuthContext } from '../Store/Store';

function SignIn() { 

  const { state, setLoginTypeToUser, setLoginTypeToOrganization } = React.useContext(AuthContext);
  const { loginType } = state;
  const { containerRef } = useActiveLoginOpacity(loginType);
  const isUser = loginType === 'user';
       
  return (<div ref={containerRef}>
        <SignInHeader>Sign In as <TypeSpan className="user" onClick={setLoginTypeToUser} >User</TypeSpan> | <TypeSpan className="organization" onClick={setLoginTypeToOrganization}>Organization</TypeSpan></SignInHeader>
      { isUser ? <div>User Sign In</div> : <div>Organization Sign In</div> }
  </div>); 
};

export default SignIn;