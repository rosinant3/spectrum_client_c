import useSingInStore from './Store/SignInHooks';
import { SignInHeader, TypeSpan } from './SignInStyles';
import useActiveLoginOpacity from '../../Ralphs/Hooks/useActiveLoginOpacity/useActiveLoginOpacity';

function SignIn() { 
 
  const { state, setTypeToUser, setTypeToOrganization } = useSingInStore();
  const { containerRef } = useActiveLoginOpacity(state.type);

  return (<div ref={containerRef}>
        <SignInHeader>Sign In as <TypeSpan className="user" onClick={setTypeToUser} >User</TypeSpan> | <TypeSpan className="organization" onClick={setTypeToOrganization}>Organization</TypeSpan></SignInHeader>

  </div>); 
};

export default SignIn;