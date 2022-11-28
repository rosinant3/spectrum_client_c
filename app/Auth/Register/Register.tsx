import React from 'react';
import { SignInHeader, TypeSpan } from '../SignIn/SignInStyles';
import useActiveLoginOpacity from '../../Ralphs/Hooks/useActiveLoginOpacity/useActiveLoginOpacity';
import UserSignUpForm from '../UserSignUp/UserSignUpForm';
import { AuthContext } from '../Store/Store';

function Register() { 
 
  const { state, setRegisterTypeToUser, setRegisterTypeToOrganization } = React.useContext(AuthContext);
  const { registerType } = state;
  const { containerRef } = useActiveLoginOpacity(registerType);
  const isUser = registerType === 'user';
  const isOrganization = registerType === 'organization';

  return (<div ref={containerRef}> 
        <SignInHeader>Register <TypeSpan className="user" onClick={setRegisterTypeToUser}>User</TypeSpan> | <TypeSpan onClick={setRegisterTypeToOrganization} className="organization" >Organization</TypeSpan></SignInHeader>
        { isUser && <UserSignUpForm />}
        { isOrganization && <div>Organization Sign Up</div> }
  </div>); 
};

export default Register;