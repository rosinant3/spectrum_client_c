import React, { Suspense } from 'react';
import { 
    AuthDashboardContainer,
    HeaderOverlay, 
    AuthDashboardGrid,
    AuthImage,
    FormContainer,
    StateContainer,
    StateText
} from './AuthDashboardStyles';
import {
    AuthDashboardProps
} from './Interfaces';
import SpectrumLoader from '../Ralphs/SpectrumLoader/SpectrumLoader';
import useAuthStore, { AuthContext } from './Store/Store';
import useUserSingUpStore, { UserSignUpStoreContext } from './UserSignUp/Store/Store';
import useUserSingInStore, { UserSignInStoreContext } from './UserSignIn/Store/Store';
import useOrgSingUpStore, { OrgSignUpStoreContext } from './OrganizationSignUp/Store/Store';
import { singUpText, loginText } from './Store/Store';
const Login = React.lazy(() => import('./Login/Login'));
const Register = React.lazy(() => import('./Register/Register'));

const AuthDashboard:React.FC<AuthDashboardProps> = () => {

  const { userSignUpValue } = useUserSingUpStore();
  const { orgSignUpValue } = useOrgSingUpStore();
  const { userSignInValue } = useUserSingInStore();
  const { authValue } = useAuthStore();
  const { state, toggleAuthType } = authValue;
  const isLogin = state.authType === 'login';
  const isRegister = state.authType === 'register'; 
 
  return (
    <AuthContext.Provider value={authValue}>
      <AuthDashboardContainer>
        <HeaderOverlay></HeaderOverlay>
        <AuthDashboardGrid>
          <AuthImage>
          </AuthImage>
          <FormContainer> 
            {isLogin && 
            <Suspense fallback={<SpectrumLoader />}>
              
              <UserSignInStoreContext.Provider value={userSignInValue}>
                <Login />
              </UserSignInStoreContext.Provider>

            </Suspense>}
            {isRegister && 
            <Suspense fallback={<SpectrumLoader />}>
              <OrgSignUpStoreContext.Provider value={orgSignUpValue}>
                <UserSignUpStoreContext.Provider value={userSignUpValue}>
                  <Register />
                </UserSignUpStoreContext.Provider>
              </OrgSignUpStoreContext.Provider>
            </Suspense>}
            <StateContainer>
              <StateText onClick={toggleAuthType}>{isLogin ? singUpText : loginText}</StateText>
            </StateContainer>
          </FormContainer>
        </AuthDashboardGrid>
      </AuthDashboardContainer>
    </AuthContext.Provider>

  );
};

export default AuthDashboard;