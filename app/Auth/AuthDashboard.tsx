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
import {
  useAuthToggle
} from './AuthDashboardHooks';
import SpectrumLoader from '../Ralphs/SpectrumLoader/SpectrumLoader';
const SignIn = React.lazy(() => import('./SignIn/SignIn'));
const Register = React.lazy(() => import('./Register/Register'));

const AuthDashboard:React.FC<AuthDashboardProps> = () => {

  const { formState, setState } = useAuthToggle();
 
  return (
    <AuthDashboardContainer>
      <HeaderOverlay></HeaderOverlay>
      <AuthDashboardGrid>
        <AuthImage>
        </AuthImage>
        <FormContainer>
          {formState.state === 'login' ?
          <Suspense fallback={<SpectrumLoader />}>
            <SignIn />
          </Suspense>
          :
          <Suspense fallback={<SpectrumLoader />}>
           <Register />
          </Suspense>
          }
          <StateContainer>
            <StateText onClick={setState}>{formState.text}</StateText>
          </StateContainer>
        </FormContainer>
      </AuthDashboardGrid>
    </AuthDashboardContainer>
  );
}

export default AuthDashboard;
