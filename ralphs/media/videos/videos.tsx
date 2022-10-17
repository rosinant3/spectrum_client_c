import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Video } from '../../../holmes/cover/videos';
import { makeStyles } from '@material-ui/core/styles'; 
import { animated } from 'react-spring';
import { SlideButton } from '../../../holmes/cover/coverComponents';
import TextField from '@material-ui/core/TextField';
import {    
 
  InputButton,
  VideosContainer,
  InputWithButtonContainer,
  ErrorText

} from '../../../cases/post/map/mapStyles';
import {
  SlideButtonContainer,
  ImmageCommentContainer
} from '../images/imagesComponents';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { usePagination } from '../../hooks/paginationHook';

const useStyles2 = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: "0rem",
      fontSize: "0.5rem",
      borderTopRightRadius: "0rem",
      borderBottomRightRadius: "0rem"
    },
    "padding": "0rem",
  },
  outlinedInput: {
    "&.MuiInputAdornment-root .MuiSvgIcon-root .MuiOutlinedInput-adornedEnd": {
      padding: "0rem"
    },
    "&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
      padding: "0rem"
    } 
  }
}));

interface CommentProps { 

  comment: string;
  id: number;
}

const VideoComment: React.FC<CommentProps> = (props) => {

  const dispatch:any = useDispatch();
  const [ comment, setComment ] = useState("");
  const id = props.id;

  useEffect(()=>{
      if (id) {
        setComment(props.comment);
      }
  }, [props.comment, id]);

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
          onChange={(e: any)=>{
              setComment(e.target.value);
          }}  
          onBlur={()=>{
              dispatch({ type: "CASES_ADD_COMMENT_TO_VIDEO", payload: { value: id, comment: comment } });
          }}
      /></ImmageCommentContainer>   )
}

const useVideoFunctions = ({ video_store, items, active, errors }:any) => {

  const dispatch:any = useDispatch();
  
    const videoOnBlur = (event: any)=>{
	  const value = event.target.value;
	  dispatch({ type: 'INCIDENT_ONCHANGE', payload: { field: "video", value: value } });
    };
    const removeVideoOnClick = ()=>{ dispatch({ type: 'INCIDENT_REMOVE_VIDEO', payload: { value: items[active].id } });};

;
	  const [ video, setVideo ] = useState("");
	  
	  useEffect(()=>{
	  
		if (video_store && video !== video_store) {
		  setVideo(video_store);
		}
	  
	  },[video_store]);
	  
	  	 
		const dispatchVideo = () => {
			try {
			  new URL(video);

			  if (video.trim() !== "") {
				dispatch({ type: 'INCIDENT_ADD_VIDEO', payload: { value: video } });
				dispatch({ type: 'INCIDENT_SET_ERROR', payload: { field: "", value: "" } });
				setVideo("");
			  }
			} catch (_) {
			  dispatch({ type: 'INCIDENT_SET_ERROR', payload: { field: "videoError",  value: errors["Invalid URL."] } });
			}
	   };
   
	   const videoOnKeyDown = (e:any)=>{              
		e.stopPropagation();
		if (e.key === "Enter") {
		  e.preventDefault();
		  dispatchVideo();
		  setVideo("");
		}
	  };  
  
	  const dispatchVideoOnClick = ()=>{dispatchVideo();};
	  const videoOnChange = (event: any)=>{
		const value = event.target.value;
		setVideo(value);
	  };
	  
	  return {
	  
		videoOnBlur,
		videoOnChange,
		dispatchVideoOnClick,
		videoOnKeyDown,
		video,
		dispatchVideo,
		removeVideoOnClick
	  };
};

interface VideosProps { 
	items: any;
	videoError: any;
  videosError: any;
	video_store: any;
	errors: any;
}

const Videos: React.FC<VideosProps> = ({ items, videoError, videosError, video_store, errors }) => {

	const videoRef: any = useRef();
	const { active, propss, dragRef, setActive } = usePagination();
	const classes2 = useStyles2();
	const {
	  
		videoOnBlur,
		videoOnChange,
		dispatchVideoOnClick,
		videoOnKeyDown,
		video,
		removeVideoOnClick
		
	  } = useVideoFunctions({ video_store, items, active });
	      const inputPropsVideo = {              
	    endAdornment: <InputButton onClick={dispatchVideoOnClick}><AddBoxIcon /></InputButton>,
	    classes: { adornedEnd: classes2.root}
    };
	 
	  return (<React.Fragment>
			  <InputWithButtonContainer className={classes2.root}>
          <TextField

              error={videoError === "" ? false : true}
              label="Video URL"
              helperText={videoError}
              value={video} 
              variant="outlined"
              size="small"
              className={classes2.root}
              inputProps={{
      
              maxLength: 255,

              }}
              InputProps={inputPropsVideo}
              onChange={videoOnChange}  
              onBlur={videoOnBlur}
              onKeyDown={videoOnKeyDown}

            />
          </InputWithButtonContainer>
                <VideosContainer ref={videoRef}>
                <SlideButtonContainer data-ignore="true">
                    <animated.div ref={dragRef} style={propss}>
                    {items.map((item: any, index: number)=>{
                        let color = "var(--mainActiveColor)";
                        let backgroundColor = "white";
                        let opacity = 0.5;

                        if (index === active) {
                            color = "white";
                            backgroundColor = "var(--mainActiveColor)";
                            opacity = 1;
                        }

                        const setActiveOnClick = ()=>{ setActive(index); };

                        return <SlideButton 
                        
                                    data-ignore="true"
                                    onClick={setActiveOnClick} 
                                    style={{ 
                                        
                                            color: color, 
                                            backgroundColor: backgroundColor,
                                            opacity: opacity
                                    }} 
                                    key={item.id}
                                    
                                >
                                    {index+1}
                                </SlideButton>
                    })} 
                    </animated.div>
                </SlideButtonContainer>
                {items[active] ? 
                  <Video 
                  
                    shown={true} 
                    item={items[active].value} 
                    removeFunction={removeVideoOnClick} 
                    
                  /> 
                : ""}
                {items[active] ? <div style={{ marginTop: "3rem" }}><VideoComment id={items[active].id} comment={items[active].comment} /></div> : ""}
                </VideosContainer>
                <ErrorText>{errors[videosError]}</ErrorText>
	  </React.Fragment>)
};

export default Videos;