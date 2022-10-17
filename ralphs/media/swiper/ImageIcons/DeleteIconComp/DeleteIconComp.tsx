import React from 'react';
import { SwiperContext } from '../../utils';
import DeleteIcon from '@mui/icons-material/Delete';


interface DeleteIconCompProps {

 };
   
 const DeleteIconComp: React.FC<DeleteIconCompProps> = () => {


    return (
        <React.Fragment> 
            <SwiperContext.Consumer>
                {(state:any) => { 

                    const deleteImage = state? state.deleteImage : ()=>{}; // ???
                    return <DeleteIcon onClick={deleteImage}></DeleteIcon> 
                
                }}
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