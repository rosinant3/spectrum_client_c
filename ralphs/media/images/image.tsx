import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {

    ImageContainer,
    ImagePreview,
    RotationContainer,
    Close,
    FullScreenImage,
    Position,
    FlexContainer,
    CommentContainer,
    ImmageCommentContainer,

} from './imagesComponents'; 
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import CloseIcon from '@material-ui/icons/Close'; 
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import TextField from '@material-ui/core/TextField';

interface CommentProps { 

    comment: string;
    id: number;

}

const ImageComment: React.FC<CommentProps> = (props) => {

    const dispatch:any = useDispatch();
    const [ comment, setComment ] = useState("");
    const id = props.id;

    useEffect(()=>{

        setComment(props.comment);

    }, [props.comment]);

    const setCommentOnChange = (e: any)=>{
        setComment(e.target.value);
    };

    const dispatchCommentOnBlur = ()=>{
        dispatch({ type: "INCIDENT_ADD_COMMENT_TO_IMAGE", payload: { value: id, comment: comment } });
    };


    return (<ImmageCommentContainer>
        
        <TextField

            multiline={true}
            id="outlined-error-helper-text"
            label="Comment"
            value={comment}
            variant="outlined"
            inputProps={{
                maxLength: 1000
            }}
            onChange={setCommentOnChange}  

            onBlur={dispatchCommentOnBlur}
        /></ImmageCommentContainer>   )

}


interface ImageProps {

    image: any; 
    index: number;
    change: any[];
    setChange: any;
    active: boolean;

} 


const Image: React.FC<ImageProps> = (props) => {
  
    const dispatch:any = useDispatch();
    const [ fullScreen, setFullScreen ] = useState(false);
    const [ commentOpen, setCommentOpen ] = useState(false);
    const ref: any = useRef();
    const change = props.change;
    const setChange = props.setChange;
    const active = props.active;
    const image = props.image;
    const id = image.id; 
    const rotate = image.rotate;
    const degrees = image.degrees;
    const index = props.index;
    const comment = image.comment;
    let height = "300px"; 
    let width = "100%";
    let color = change[0] === index || change[1] === index ? "var(--mainActiveColor)" : "var(--mainColor)";
    let opacity = active ? 1 : 0;
    let zIndex = active ? 10 : -1;

    if (rotate % 2 !== 0) {

        height = "100%";
        width = "300px"; 

    }

    const removeImageOnClick = (e:any)=>{ e.stopPropagation(); dispatch({ type: "CASES_REMOVE_IMAGE", payload: { value: id } }); };
    const openCommentOnClick = (e:any)=>{ e.preventDefault(); setCommentOpen(!commentOpen); };
    const rotateImageOnClickByMinus = (e:any)=>{ e.stopPropagation(); dispatch({ type: "CASES_ROTATE_IMAGE", payload: { value: id, by: -1 }})};
    const changeImagePositionOnClick = (e:any)=>{ 
                    
        e.stopPropagation(); 
        if (change[0] === index) {
            setChange([]);
        } else if (change.length > 0) {
            const newChange = change.slice(0);
            newChange.push(index);
            dispatch({ type: "INCIDENT_IMAGE_CHANGE_POSITION", payload: { value: newChange } });
            setChange([]);
        } else {
            const newChange = change.slice(0);
            newChange.push(index);
            setChange(newChange); 
        }
        
    };
    const rotateImageOnClickByPlus = (e:any)=>{ e.stopPropagation(); dispatch({ type: "CASES_ROTATE_IMAGE", payload: { value: id, by: +1 }})};
    const setFullscreenOnClick = (e:any)=>{  setFullScreen(!fullScreen) };


  return (<ImageContainer ref={ref} style={{ opacity: opacity, zIndex: zIndex }}>
        <ImagePreview 
        
            style={{ 
            
                backgroundImage: `url('${image.reader}')`, 
                transform: `rotate(${degrees}deg)`,
                height: height,
                width: width
            
            }}

        
        ></ImagePreview>
        <FlexContainer>
            <Close>
                <CloseIcon onClick={removeImageOnClick} ></CloseIcon>
            </Close>
        </FlexContainer>
        <CommentContainer  style={{ color: commentOpen ? "var(--mainActiveColor)" : "var(--mainColor)" }}>
            <InsertCommentIcon onClick={openCommentOnClick} />
            <div style={{ display: commentOpen ? "block" : "none", marginTop: "0.5rem" }}>
                <ImageComment comment={comment} id={id} />
            </div>
        </CommentContainer>
        <RotationContainer>
            <RotateLeftIcon  
            
                style={{ color: "var(--mainActiveColor)", cursor: "pointer"  }}
                onClick={rotateImageOnClickByMinus}
                            
            ></RotateLeftIcon>
                <Position 
                
                style={{ backgroundColor: color }}
                onClick={changeImagePositionOnClick} 

            >{index + 1}</Position>
            <RotateRightIcon
                                    
                style={{ color: "var(--mainActiveColor)", cursor: "pointer" }}
                onClick={rotateImageOnClickByPlus}
                        
            ></RotateRightIcon>
        </RotationContainer>
        <FullScreenImage

                        style={{ 
            
                            backgroundImage: `url('${image.reader}')`, 
                            transform: `rotate(${degrees}deg)`,
                            display: fullScreen ? "block" : "none"
                        
                        }}
                        onClick={setFullscreenOnClick}
        
        ></FullScreenImage>
  </ImageContainer>);
}

export default Image;