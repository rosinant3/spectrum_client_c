import React from 'react';
import { 
    BulletinContainer
} from './BulletinStyles';
import {
    BulletinProps
} from './Interfaces';
import { 
  ProfileContainer 
} from '../../Ralphs/Styles/ProfileContainer/ProfileContainer';
import Header from '../Header/Header';


const Bulletin:React.FC<BulletinProps> = () => {
  return (
    <ProfileContainer>
        <Header />
        Bulletin Works!
    </ProfileContainer>
  );
}

export default Bulletin;
