import React, { Suspense } from 'react';
import { 
    BlogContainer
} from './BlogStyles';
import { 
  ProfileContainer 
} from '../../Ralphs/Styles/ProfileContainer/ProfileContainer';
import {
  BlogProps
} from './Interfaces';
import Header from '../Header/Header';
import LoadingScreen from '../../Ralphs/LoadingScreen/LoadingScreen';
const List = React.lazy(() => import('./List/List'));


const Blog:React.FC<BlogProps> = () => {
  return (
    <ProfileContainer>
        <Header />
        <Suspense fallback={<LoadingScreen />}>
          <List />
        </Suspense>
    </ProfileContainer>
  );
} 

export default Blog;
