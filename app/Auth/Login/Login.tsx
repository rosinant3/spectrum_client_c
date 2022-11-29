import React from 'react';
import useSingInStore from '../Store/Store';
import { LoginHeader, TypeSpan } from './LoginStyles';
import useActiveLoginOpacity from '../../Ralphs/Hooks/useActiveLoginOpacity/useActiveLoginOpacity';
import { AuthContext } from '../Store/Store';
import UserSignInForm from '../UserSignIn/UserSignInForm';

function Login() { 

  const { state, setLoginTypeToUser, setLoginTypeToOrganization } = React.useContext(AuthContext);
  const { loginType } = state;
  const { containerRef } = useActiveLoginOpacity(loginType);
  const isUser = loginType === 'user';
  const isOrganization = loginType === 'organization';
       
  return (<div ref={containerRef}>
        <LoginHeader>Sign In as <TypeSpan className="user" onClick={setLoginTypeToUser} >User</TypeSpan> | <TypeSpan className="organization" onClick={setLoginTypeToOrganization}>Organization</TypeSpan></LoginHeader>
      { isUser && <UserSignInForm /> }
      { isOrganization && <div>Organization Sign In</div> }
  </div>); 
};

export default Login;