import React from 'react';
import { 
    ListContainer
} from './ListStyles';
import {
  AddButton
} from '../../ProfileStyles';
import {
  ListProps
} from './Interfaces';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {
  Link
} from "react-router-dom";

const List:React.FC<ListProps> = () => {
  return (
    <ListContainer>

      <AddButton title="Add Post!">
        <Link to="/profile/blog/post"><AddBoxIcon fontSize="inherit" /></Link>
      </AddButton>
    </ListContainer>
  );
} 

export default List;
