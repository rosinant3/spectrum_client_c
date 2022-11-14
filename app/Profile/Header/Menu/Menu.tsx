import React from 'react';
import { 
    MenuContainer,
    MenuButton
} from './MenuStyles';
import {
    MenuProps
} from './Interfaces';
import {
  Link
} from "react-router-dom";
import useActiveRouteOpacity from '../../../Ralphs/Hooks/useActiveRouteOpacity/useActiveRouteOpacity';
import { menuClasses } from './Data';

const { 

  profile, 
  profileBulletin,
  profileBlog,
  profileCatalog,
  profileCases,
  profileHazards

} = menuClasses;

const Menu:React.FC<MenuProps> = () => {

  const { menuRef } = useActiveRouteOpacity();

  return ( 
    <MenuContainer ref={menuRef}>
      <div className="./" style={{display:'none'}}></div>
      <MenuButton ><Link className={profile} to="/profile">Profile</Link></MenuButton>
      <MenuButton><Link className={profileBulletin}  to="/profile/bulletin">Bulletin</Link></MenuButton>
      <MenuButton><Link className={profileBlog}  to="/profile/blog">Blog</Link></MenuButton>
      <MenuButton><Link className={profileCatalog} to="/profile/catalog">Catalog</Link></MenuButton>
      <MenuButton><Link className={profileCases} to="/profile/cases">Cases</Link></MenuButton>
      <MenuButton><Link className={profileHazards} to="/profile/hazards">Hazards</Link></MenuButton>
    </MenuContainer>
  );
}

export default Menu;
