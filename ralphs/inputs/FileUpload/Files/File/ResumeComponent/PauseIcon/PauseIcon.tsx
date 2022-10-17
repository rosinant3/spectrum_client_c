
import * as React from 'react';
import { IconContainer } from './PauseIconStyles';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import { usePause } from './PauseIconHooks';

interface PauseIconProps {
    file: { id:number; type: string; };
    filePause: any;
};
  
const PauseIcon: React.FC<PauseIconProps> = ({ file, filePause }) => {

  const { dispatchFilePause } = usePause(filePause, file);

  return ( 
        <IconContainer onClick={dispatchFilePause} >
            <PauseCircleOutlineIcon></PauseCircleOutlineIcon>
        </IconContainer>
  );
}

export default PauseIcon;
