import React, { Suspense } from 'react';
import Header from '../Routes/Header/Header';
import LoadingScreen from '../Ralphs/LoadingScreen/LoadingScreen';
const AuthDashboard = React.lazy(() => import('./AuthDashboard'));

function Auth() {
  return (<>
    <Header />
    <Suspense fallback={<LoadingScreen />}>
        <AuthDashboard />
    </Suspense>
  </>); 
}

export default Auth;


