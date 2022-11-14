import React from 'react';
import { 
    CatalogContainer
} from './CatalogStyles';
import { 
  ProfileContainer 
} from '../../Ralphs/Styles/ProfileContainer/ProfileContainer';
import {
  CatalogProps
} from './Interfaces';
import Header from '../Header/Header';


const Catalog:React.FC<CatalogProps> = () => {
  return (
    <ProfileContainer>
      <Header />
        Catalog Works!
    </ProfileContainer>
  );
}

export default Catalog;
