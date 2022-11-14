import React from 'react';
import { 
    HeaderContainer
} from './HeaderStyles';
import {
    HeaderProps
} from './Interfaces';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import SingIn from './SingIn/SingIn';
import {
  useActiveRoute
} from './HeaderHooks';

const Header:React.FC<HeaderProps> = () => {

  const { showSingIn } = useActiveRoute();
  
  return (
    <HeaderContainer>
        <Logo />
        <Menu /> 
        <div>{showSingIn && <SingIn />}</div>
    </HeaderContainer>
  );
}

export default Header;
