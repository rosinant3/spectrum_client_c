import React, { Suspense } from 'react';
import Header from '../Routes/Header/Header';
import LoadingScreen from '../Ralphs/LoadingScreen/LoadingScreen';
const LoginDashboard = React.lazy(() => import('./LoginDashboard'));

function Login() {
  return (<>
    <Header />
    <Suspense fallback={<LoadingScreen />}>
        <LoginDashboard />
    </Suspense>
  </>); 
}

export default Login;


