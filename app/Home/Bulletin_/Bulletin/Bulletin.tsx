import React from 'react';
import { 
    BulletinContainer,
    ButtonContainer,
    BulletinParent
} from './BulletinStyles';
import {
    BulletinProps
} from './Interfaces';
import Grid from './Grid/Grid';
import { useActiveBulletin } from './BulletinHooks';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
 
const Bulletin:React.FC<BulletinProps> = ({ list }) => {

  const { active, nextBulletin } = useActiveBulletin(list.length);

  return ( 
    <BulletinParent>
    <BulletinContainer>
        {list.map((template, index)=>{
            return <Grid key={template.id} template={template} active={active} index={index} />;
        })}
    </BulletinContainer>
    <ButtonContainer>
        <NavigateNextIcon onClick={nextBulletin} fontSize="inherit"  />
    </ButtonContainer>
    </BulletinParent>

  );
}

export default Bulletin;
