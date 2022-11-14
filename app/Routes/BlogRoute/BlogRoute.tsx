import React, { Suspense } from 'react';
import LoadingScreen from '../../Ralphs/LoadingScreen/LoadingScreen';
import Header from '../Header/Header';
const Blog = React.lazy(() => import('../../Blog/Blog'));

function BlogRoute() {
  return (
    <Suspense fallback={<LoadingScreen />}>
        <Header />
        <Blog />
    </Suspense>
  );
}

export default BlogRoute;


