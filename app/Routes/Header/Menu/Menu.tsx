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
  blog,
  catalog,
  cases,
  hazards

} = menuClasses;

const Menu:React.FC<MenuProps> = () => {

  const { menuRef } = useActiveRouteOpacity(); 

  return ( 
    <MenuContainer ref={menuRef}> 
        <div className="-w hidden" ></div>
        <div className="-loginw hidden" ></div>
        <MenuButton><Link className={profile} to="/profile">Profile</Link></MenuButton>
        <MenuButton><Link className={blog} to="/blog">Blog</Link></MenuButton>
        <MenuButton><Link className={catalog} to="/catalog">Catalog</Link></MenuButton>
        <MenuButton><Link className={cases} to="/cases">Cases</Link></MenuButton>
        <MenuButton><Link className={hazards} to="/hazards">Hazards</Link></MenuButton>
    </MenuContainer>
  );
}

export default Menu;
