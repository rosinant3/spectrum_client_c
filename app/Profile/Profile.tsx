import React from 'react';
import { 
  ProfileContainer 
} from '../Ralphs/Styles/ProfileContainer/ProfileContainer';
import {
  ProfileProps
} from './Interfaces';
import Header from './Header/Header';

 
const Profile:React.FC<ProfileProps> = () => {
  return (
    <ProfileContainer> 
        <Header /> 
        Profile Works!
    </ProfileContainer>

  );
}

export default Profile;
