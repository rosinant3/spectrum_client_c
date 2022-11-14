import React, { Suspense } from 'react';
import LoadingScreen from '../../Ralphs/LoadingScreen/LoadingScreen';
import Header from '../Header/Header';
const Home = React.lazy(() => import('../../Home/Home'));


function HomeRoute() {
  return (
    <Suspense fallback={<LoadingScreen />}>
        <Header />
        <Home />
    </Suspense>
  );
}

export default HomeRoute;


