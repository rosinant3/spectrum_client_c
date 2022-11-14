import React, { Suspense } from 'react';
import { 
    LoginDashboardContainer,
    HeaderOverlay,
    LoginDashboardGrid,
    LoginImage,
    FormContainer,
    StateContainer,
    StateText
} from './LoginDashboardStyles';
import {
    LoginDashboardProps
} from './Interfaces';
import {
  useLoginSingupToggle
} from './LoginDashboardHooks';
import SpectrumLoader from '../Ralphs/SpectrumLoader/SpectrumLoader';
const UserLogin = React.lazy(() => import('./UserLogin/UserLogin'));
const UserSignUpForm = React.lazy(() => import('./UserSignUp/UserSingUpForm'));

const LoginDashboard:React.FC<LoginDashboardProps> = () => {

  const { formState, setState } = useLoginSingupToggle();
 
  return (
    <LoginDashboardContainer>
      <HeaderOverlay></HeaderOverlay>
      <LoginDashboardGrid>
        <LoginImage>
        </LoginImage>
        <FormContainer>
          {formState.state === 'login' ?
          <Suspense fallback={<SpectrumLoader />}>
            <UserLogin />
          </Suspense>
          :
          <Suspense fallback={<SpectrumLoader />}>
           <UserSignUpForm />
          </Suspense>
          }
          <StateContainer>
            <StateText onClick={setState}>{formState.text}</StateText>
          </StateContainer>
        </FormContainer>
      </LoginDashboardGrid>
    </LoginDashboardContainer>
  );
}

export default LoginDashboard;
