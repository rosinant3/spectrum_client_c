
import * as React from 'react';
import { IconContainer } from './RemoveIconStyles';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const RemoveIcon = ({ id }) => {


  return ( 

        <IconContainer>
            <HighlightOffIcon></HighlightOffIcon>
        </IconContainer>
  );
}

export default RemoveIcon;
