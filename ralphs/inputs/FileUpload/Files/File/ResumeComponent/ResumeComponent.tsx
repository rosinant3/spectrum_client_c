
import * as React from 'react';
import { 
  
    IconContainer,
    ProgressBox
  
} from './ResumeComponentStyles';
import ActionContext from '../../context';
import PauseIcon from './PauseIcon/PauseIcon';
import ResumeIcon from './ResumeIcon/ResumeIcon';

interface ResumeComponent {
    id: number;
    type: string;
    progress: any;
};
  
const ResumeComponent: React.FC<ResumeComponent> = ({ id, type, progress }) => {

  return ( 
    <ActionContext.Consumer >
        { (actions:any) => {

            return (<IconContainer data-id={id}>
            {progress.waiting ? 
                <PauseIcon 
                
                    filePause={actions.filePause} 
                    file={{ id, type }} 
                    
                /> :
                <ResumeIcon 
                
                    fileResume={actions.fileResume} 
                    file={{ id, type }} 
                
                />
            }
            <ProgressBox>
              {`${progress.percentage}%`}
            </ProgressBox>
        </IconContainer>)}}
    </ActionContext.Consumer>

  );
}

export default ResumeComponent;
