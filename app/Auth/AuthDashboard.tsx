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
import useSingUpStore, { SignUpStoreContext } from './UserSignUp/Store/Store';
import { singUpText, loginText } from './Store/Store';
const SignIn = React.lazy(() => import('./SignIn/SignIn'));
const Register = React.lazy(() => import('./Register/Register'));

const AuthDashboard:React.FC<AuthDashboardProps> = () => {

  const { signUpValue } = useSingUpStore();
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
            {isRegister && 
            <Suspense fallback={<SpectrumLoader />}>
              <SignIn />
            </Suspense>}
            {isLogin && 
            <Suspense fallback={<SpectrumLoader />}>
             <SignUpStoreContext.Provider value={signUpValue}>
               <Register />
              </SignUpStoreContext.Provider>
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