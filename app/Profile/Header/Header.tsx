import React from 'react';
import { 
    HeaderContainer
} from './HeaderStyles';
import {
  HeaderProps
} from './Interfaces';
import Menu from './Menu/Menu';
import Logo from '../../Routes/Header/Logo/Logo';

const Header:React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Menu /> 


    </HeaderContainer>

  );
}

export default Header;
