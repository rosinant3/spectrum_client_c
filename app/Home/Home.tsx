import React from 'react';
import { 
    HomeContainer
} from './HomeStyles';
import {
  HomeProps
} from './Interfaces';
import CoverGradient from './CoverGradient/CoverGradient';
import Bulletin_ from './Bulletin_/Bulletin_';
import Blog_ from './Blog_/Blog_';
import Catalog_ from './Catalog_/Catalog_';
import External from './External/External';

const Home:React.FC<HomeProps> = () => {
  return (
    <HomeContainer>
      <CoverGradient />
      <Bulletin_ />
      <Catalog_ />
      <Blog_ />
      <External />
    </HomeContainer>
  );
}

export default Home;
