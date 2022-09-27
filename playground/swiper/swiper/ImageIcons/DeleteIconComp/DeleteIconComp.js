import React from 'react';
import { SwiperContext } from '../../utils';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteIconComp = () => {

    return (
        <React.Fragment> 
            <SwiperContext.Consumer>
                {state => <DeleteIcon onClick={state.deleteImage}></DeleteIcon> }
            </SwiperContext.Consumer>
        </React.Fragment>
    );
}

/*
    <Text>
    { comment }
    </Text> 
*/


export default DeleteIconComp;