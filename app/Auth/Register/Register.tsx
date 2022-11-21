import useRegisterStore from './Store/RegisterHooks';
import { SignInHeader, TypeSpan } from '../SignIn/SignInStyles';
import useActiveLoginOpacity from '../../Ralphs/Hooks/useActiveLoginOpacity/useActiveLoginOpacity';
import UserSignUpForm from '../UserSignUp/UserSingUpForm';

function Register() { 
 
  const { state, setTypeToUser, setTypeToOrganization } = useRegisterStore();
  const { type } = state;
  const { containerRef } = useActiveLoginOpacity(type);

  return (<div ref={containerRef}>
        <SignInHeader>Register <TypeSpan className="user" onClick={setTypeToUser} >User</TypeSpan> | <TypeSpan className="organization" onClick={setTypeToOrganization}>Organization</TypeSpan></SignInHeader>
        { type === 'user' ? <UserSignUpForm /> : <div>Organization Sign Up</div> }
  </div>); 
};

export default Register;