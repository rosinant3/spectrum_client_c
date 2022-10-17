 
import * as React from 'react';
import { IconContainer } from './ResumeIconStyles';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

interface ResumeIconProps {
  file: { id:number; type: string; };
  fileResume: any;
};

const ResumeIcon: React.FC<ResumeIconProps> = ({ file }) => {

  return ( 
        <IconContainer data-id={file.id} data-filetype={file.type} data-type={'fileResume'}>
            <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
        </IconContainer>
  );
};

export default ResumeIcon;
