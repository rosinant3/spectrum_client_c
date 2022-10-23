 
import * as React from 'react';
import { IconContainer } from './ResumeIconStyles';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useResume } from './ResumeHooks';

interface ResumeIconProps {
  file: { id:number; type: string; };
  fileResume: any;
};

const ResumeIcon: React.FC<ResumeIconProps> = ({ file, fileResume }) => {

  const { dispatchFileResume } = useResume(fileResume, file);

  return ( 
        <IconContainer onClick={dispatchFileResume} >
            <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
        </IconContainer>
  );
};

export default ResumeIcon;
