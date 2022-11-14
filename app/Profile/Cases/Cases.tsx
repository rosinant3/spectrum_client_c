import React from 'react';
import { 
    CasesContainer
} from './CasesStyles';
import { 
  ProfileContainer 
} from '../../Ralphs/Styles/ProfileContainer/ProfileContainer';
import {
  CasesProps
} from './Interfaces';
import Header from '../Header/Header';


const Cases:React.FC<CasesProps> = () => {
  return (
    <ProfileContainer>
        <Header />
        Cases Work!
    </ProfileContainer>
  );
}

export default Cases;
