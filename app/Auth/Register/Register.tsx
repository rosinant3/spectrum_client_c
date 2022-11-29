import React from 'react';
import { LoginHeader, TypeSpan } from '../Login/LoginStyles';
import useActiveLoginOpacity from '../../Ralphs/Hooks/useActiveLoginOpacity/useActiveLoginOpacity';
import UserSignUpForm from '../UserSignUp/UserSignUpForm';
import OrgSignUpForm from '../OrganizationSignUp/OrgSignUpForm';
import { AuthContext } from '../Store/Store';

function Register() { 
 
  const { state, setRegisterTypeToUser, setRegisterTypeToOrganization } = React.useContext(AuthContext);
  const { registerType } = state;
  const { containerRef } = useActiveLoginOpacity(registerType);
  const isUser = registerType === 'user';
  const isOrganization = registerType === 'organization';

  return (<div ref={containerRef}> 
        <LoginHeader>Register <TypeSpan className="user" onClick={setRegisterTypeToUser}>User</TypeSpan> | <TypeSpan onClick={setRegisterTypeToOrganization} className="organization" >Organization</TypeSpan></LoginHeader>
        { isUser && <UserSignUpForm /> }
        { isOrganization && <OrgSignUpForm /> }
  </div>); 
};

export default Register;