import React from 'react';
import { 
    HazardsContainer
} from './HazardsStyles';
import { 
  ProfileContainer 
} from '../../Ralphs/Styles/ProfileContainer/ProfileContainer';
import {
  HazardsProps
} from './Interfaces';
import Header from '../Header/Header';

const Hazards:React.FC<HazardsProps> = () => {
  return (
    <ProfileContainer>
      <Header />
        Hazards Work!
    </ProfileContainer>
  );
}

export default Hazards;
